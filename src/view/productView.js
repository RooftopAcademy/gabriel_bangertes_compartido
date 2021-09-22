function productView(product) {
    return `
        <div class='d-flex products-item jc-space-evenly ai-center' product-id='${product.id}'>
            <div>
                <img src='${product.img}' class='product-img'>
            </div>
            <div class='price'>
                <h2>$ ${product.price}</h2>
                <p>${product.title}</p>
            </div>
            <div>
                <button class="cart-button" data-id='${product.id}'>AGREGAR AL CARRITO</button>
            </div>
        </div>
        `;
}

