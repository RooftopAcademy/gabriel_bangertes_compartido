import Product from '../entities/Product';

export default function offerComponent(offer: Product): string {
    return `
        <div class='d-flex offers-item fd-column jc-space-evenly ai-center' data-id='${offer.getId()}'>
            <img src='${offer.getImg()}' class='offer-img' alt="imagen">
            <div class='price-card'>
                <h2>$ ${offer.getPrice()}</h2>
                <p>${offer.getTitle()}</p>
                <button class='cart-button button'>COMPRAR</button>
            </div>
        </div>
        `;
}