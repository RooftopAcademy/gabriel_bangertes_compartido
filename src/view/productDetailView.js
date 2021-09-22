function productDetailView(product) {
    return `
        <div class='d-flex fd-column products-item jc-space-evenly ai-center' data-id='${product.id}'>
            <div>
                <img src='${product.img}' class='offer-img'>
            </div>
            <div class=''>
                <h2>${product.title}</h2>
            </div>
            <div class=''>
                <h3>$ ${product.price}</h3>
            </div>
            <div class=''>
                <p>${product.description}</p>
            </div>
            <div>
                <button class="cart-button" data-id='${product.id}'>AGREGAR AL CARRITO</button>
            </div>
        </div>
        <div>
            <h2>Opiniones de nuestros clientes</h2>
        </div>
        `;
}