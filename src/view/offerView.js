function offerView(offer) {
    return `
        <div class='d-flex offers-item fd-column jc-space-evenly ai-center"' data-id='${offer.id}'>
                <img src='${offer.img}' class='offer-img'>
            <div class='price'>
                <h2>$ ${offer.price}</h2>
                <p>${offer.title}</p>
                <button class="cart-button">AGREGAR AL CARRITO</button>
            </div>
        </div>
        `;
}