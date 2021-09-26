class Store {
    constructor() {
        this._catalog = new Catalog;
        this._user = new User;
    }

    addProducts() {
        const products = [
            { id: 1, price: 500, quantity: 10, title: "250g Cafe Excelso Colombia", img: "img/1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem eros, tempor eu tellus et, iaculis tristique dui. Fusce suscipit augue et rhoncus scelerisque. Maecenas at sem odio. Morbi imperdiet mi sed rhoncus tincidunt. Sed at tortor non ipsum pellentesque cursus. Aenean in urna velit. Aliquam volutpat metus vitae mi facilisis accumsan. Fusce vehicula mattis maximus. Donec id tempor sapien, ac mollis tortor. Quisque tincidunt mollis tortor, ut finibus lacus laoreet sit amet."},
            { id: 2, price: 1000, quantity: 15, title: "500g Cafe Excelso Colombia", img: "img/2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem eros, tempor eu tellus et, iaculis tristique dui. Fusce suscipit augue et rhoncus scelerisque. Maecenas at sem odio. Morbi imperdiet mi sed rhoncus tincidunt. Sed at tortor non ipsum pellentesque cursus. Aenean in urna velit. Aliquam volutpat metus vitae mi facilisis accumsan. Fusce vehicula mattis maximus. Donec id tempor sapien, ac mollis tortor. Quisque tincidunt mollis tortor, ut finibus lacus laoreet sit amet."},
            { id: 3, price: 1500, quantity: 20, title: "2Kg Cafe Excelso Colombia", img: "img/3.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem eros, tempor eu tellus et, iaculis tristique dui. Fusce suscipit augue et rhoncus scelerisque. Maecenas at sem odio. Morbi imperdiet mi sed rhoncus tincidunt. Sed at tortor non ipsum pellentesque cursus. Aenean in urna velit. Aliquam volutpat metus vitae mi facilisis accumsan. Fusce vehicula mattis maximus. Donec id tempor sapien, ac mollis tortor. Quisque tincidunt mollis tortor, ut finibus lacus laoreet sit amet."},
            { id: 4, price: 1700, quantity: 13, title: "500g Cafe Guanes Genuino Colombia", img: "img/4.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem eros, tempor eu tellus et, iaculis tristique dui. Fusce suscipit augue et rhoncus scelerisque. Maecenas at sem odio. Morbi imperdiet mi sed rhoncus tincidunt. Sed at tortor non ipsum pellentesque cursus. Aenean in urna velit. Aliquam volutpat metus vitae mi facilisis accumsan. Fusce vehicula mattis maximus. Donec id tempor sapien, ac mollis tortor. Quisque tincidunt mollis tortor, ut finibus lacus laoreet sit amet."},
            { id: 5, price: 1300, quantity: 18, title: "250g Cafe Kona Hawaii Premium ", img: "img/5.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem eros, tempor eu tellus et, iaculis tristique dui. Fusce suscipit augue et rhoncus scelerisque. Maecenas at sem odio. Morbi imperdiet mi sed rhoncus tincidunt. Sed at tortor non ipsum pellentesque cursus. Aenean in urna velit. Aliquam volutpat metus vitae mi facilisis accumsan. Fusce vehicula mattis maximus. Donec id tempor sapien, ac mollis tortor. Quisque tincidunt mollis tortor, ut finibus lacus laoreet sit amet."},
            { id: 6, price: 700, quantity: 7, title: "250g Cafe Guanes Genuino Colombia", img: "img/6.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem eros, tempor eu tellus et, iaculis tristique dui. Fusce suscipit augue et rhoncus scelerisque. Maecenas at sem odio. Morbi imperdiet mi sed rhoncus tincidunt. Sed at tortor non ipsum pellentesque cursus. Aenean in urna velit. Aliquam volutpat metus vitae mi facilisis accumsan. Fusce vehicula mattis maximus. Donec id tempor sapien, ac mollis tortor. Quisque tincidunt mollis tortor, ut finibus lacus laoreet sit amet."},
        ];

        products.forEach((product) => {
            const newProduct = new Product;
            newProduct.id = product.id;
            newProduct.title = product.title;
            newProduct.description = product.description;
            newProduct.price = product.price;
            newProduct.img = product.img;
            newProduct.quantity = product.quantity;
            this._catalog.addProduct(newProduct);
        });
    }

    fetchComments() {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => (response.ok ? response.json() : Promise.reject(response)))
        .then((json) => {
            console.log(json);
            console.log(this);
            json.forEach((comment) => {
                if (comment.postId < 7) {
                    this.getProductById(comment.postId).addComment(comment);
                }
            })
        })
    }

    get catalog() {
        return this._catalog.productList;
    }

    getProductById(id) {
        return this._catalog.getProduct(id);
    }
}
