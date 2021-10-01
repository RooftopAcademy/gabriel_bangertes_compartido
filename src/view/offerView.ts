import Product from '../class/Product';

export default function offerView(offer: Product): string {
    return `
        <div class='d-flex offers-item fd-column jc-space-evenly ai-center' data-id='${offer.getId()}'>
            <img src='${offer.getImg()}' class='offer-img' alt="imagen">
            <div class='price'>
                <h2>$ ${offer.getPrice()}</h2>
                <p>${offer.getTitle()}</p>
                <button class='cart-button'>AGREGAR AL CARRITO</button>
            </div>
        </div>
        `;
}