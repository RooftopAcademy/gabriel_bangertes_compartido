import Product from '../entities/Product';

export default function productComponent(product: Product): string {
    return `
        <div class='d-flex products-item jc-space-evenly ai-center' data-id='${product.getId()}'>
            <div>
                <img src='${product.getImg()}' class='product-img' alt="imagen">
            </div>
            <div class='price-card'>
                <h2>$ ${product.getPrice()}</h2>
                <p>${product.getTitle()}</p>
            </div>
            <div>
                <button class='cart-button button' data-id='${product.getId()}'>COMPRAR</button>
            </div>
        </div>
        `;
}

