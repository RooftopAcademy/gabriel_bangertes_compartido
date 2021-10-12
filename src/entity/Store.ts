import Catalog from './Catalog';
import User from './User';
import Product from './Product';
import CommentInterface from '../interface/CommentInterface';
import ProductInterface from '../interface/ProductInterface';

export default class Store {

    private user: User;

    constructor() {
        this.catalog = new Catalog;
        this.user = new User;
    }

    private catalog: Catalog;

    getCatalog(): Product[] {
        return this.catalog.getProductList();
    }

    addProducts(productList: ProductInterface[]): Product[] {
        productList.forEach((product: ProductInterface) => {
            this.catalog.addProduct(product)
        });

        return this.getCatalog();
    }

    fetchComments(): void {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
            .then((json: CommentInterface[]) => {
                json.forEach((comment: CommentInterface) => {
                    if (this.getProductById(comment.postId)) {
                        this.getProductById(comment.postId).addComment(comment);
                    }
                })
            })
    }

    getProductById(id: number): Product {
        return this.catalog.findProduct(id);
    }
}
