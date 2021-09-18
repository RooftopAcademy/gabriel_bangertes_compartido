function offerView(offer) {
    return `
        <div class='d-flex offers-item fd-column jc-space-evenly ai-center' product-id='${offer.id}'>
                <img src='${offer.img}' class='offer-img'>
            <div class='price'>
                <h2>$ ${offer.price}</h2>
                <p>${offer.title}</p>
            </div>
        </div>
        `;
}