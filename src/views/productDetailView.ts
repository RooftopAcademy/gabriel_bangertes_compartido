import Product from '../entities/Product';

export default function productDetailView(product: Product): string {
    return `
        <div class='d-flex fd-column products-item jc-space-evenly ai-center' data-id='${product.getId()}'>
            <div>
                <img src='${product.getImg()}' class='offer-img' alt="image">
            </div>
            <div class=''>
                <h2>${product.getTitle()}</h2>
            </div>
            <div class=''>
                <h3>$ ${product.getPrice()}</h3>
            </div>
            <div class=''>
                <p>${product.getDescription()}</p>
            </div>
            <div>
                <button class='cart-button' data-id='${product.getId()}'>AGREGAR AL CARRITO</button>
            </div>
        </div>
        <div>
            <h2>Opiniones de nuestros clientes</h2>
        </div>
        `;
}