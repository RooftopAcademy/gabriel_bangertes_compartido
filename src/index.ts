import UI from './entity/UI';

// const carrousel: string = '<h2>CARROUSEL</h2>';
// (document.querySelector('.carrousel') as HTMLElement).innerHTML = carrousel;
const ui: UI = new UI;

const nav: HTMLElement = document.querySelector('nav') as HTMLElement;
const carrousel: HTMLElement = document.querySelector('.carrousel') as HTMLElement;
const offers: HTMLElement = document.querySelector('.offers') as HTMLElement;
const footer: HTMLElement = document.querySelector('.footer') as HTMLElement;

ui.renderCarrousel(carrousel);
ui.renderFooter(footer);

ui.fetchProducts(offers, productButton);

ui.renderNavbar(nav);
addNavbarActions(nav);

// NAVBAR
function addNavbarActions(navbar: HTMLElement): void {
    (navbar.querySelector('.menu') as HTMLElement)
        .addEventListener('click',
            () => ui.toggleNavbar(navbar as HTMLElement));
}

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
    ui.addProductViews(products, ui.getStore().getCatalog());
    productButton();
    ui.toggleNavbar(nav);
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
    ui.addOfferViews(offers, ui.getStore().getCatalog());
    productButton();
    ui.toggleNavbar(nav);
});

// PRODUCT DETAIL
function productButton(): void {
    Array.from(document.querySelectorAll('.offers-item, .products-item') as NodeListOf<HTMLElement>)
        .forEach((offerView) => offerView.addEventListener(
            'click',
            () => ui.renderDetailView(offerView as HTMLElement)
        ));
}

ui.getStore().fetchComments();