import Product from '../class/Product';

export default function productView(product: Product): string {
    return `
        <div class='d-flex products-item jc-space-evenly ai-center' data-id='${product.getId()}'>
            <div>
                <img src='${product.getImg()}' class='product-img' alt="imagen">
            </div>
            <div class='price'>
                <h2>$ ${product.getPrice()}</h2>
                <p>${product.getTitle()}</p>
            </div>
            <div>
                <button class='cart-button' data-id='${product.getId()}'>AGREGAR AL CARRITO</button>
            </div>
        </div>
        `;
}

