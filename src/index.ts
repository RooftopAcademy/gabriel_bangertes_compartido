import UI from './entities/UI';

const ui: UI = new UI(document);

// PRODUCTS BUTTON
(document.querySelector('.js-products') as HTMLElement).addEventListener('click', function () {
    const main: HTMLElement = (document.querySelector('main') as HTMLElement);
    main.innerHTML = `
        <div class='d-flex products jc-space-evenly fw-wrap fg-1 ac-flex-start'>
            <div class='title'>
                <h2> TODOS LOS PRODUCTOS </h2>
            </div>
        </div>`;
    const products: HTMLElement = (main.querySelector('.products') as HTMLElement);
    ui.addProductComponents(products, ui.getStore().getCatalog());
    ui.productButton();
    ui.toggleNavbar();
});

// HOME BUTTON
(document.querySelector('.js-home') as HTMLElement).addEventListener('click', function () {
    const main: HTMLElement = (document.querySelector('main') as HTMLElement);
    main.innerHTML = `
        <div class='carrousel'>
            <h2> CARROUSEL </h2>
        </div>
        <div class='d-flex offers jc-space-evenly fw-wrap fg-1 ac-flex-start'>
            <div class='title'>
                <h2> OFERTAS </h2>
            </div>
        </div>`;
    const offers: HTMLElement = (main.querySelector('.offers') as HTMLElement);
    ui.addOfferComponents(offers, ui.getStore().getCatalog());
    ui.productButton();
    ui.toggleNavbar();
});

ui.getStore().fetchComments();