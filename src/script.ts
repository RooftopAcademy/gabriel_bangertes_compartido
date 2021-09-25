import { UI } from "class/UI";

const carrousel: string = "<h2>CARROUSEL</h2>";
(document.querySelector(".carrousel") as HTMLElement).innerHTML = carrousel;

const ui: UI = new UI;
const offers: HTMLElement = document.querySelector(".offers") as HTMLElement;
ui.addOfferViews(offers, ui.store.catalog);

// NAVBAR
(document.querySelector(".menu") as HTMLElement).addEventListener("click", function () {
    if ((document.querySelector(".navbar-item") as HTMLElement).classList.contains("active")) {
        for (let i: number = 0; i < (document.getElementsByClassName("navbar-item") as HTMLCollection).length; i++) {
            (document.getElementsByClassName("navbar-item").item(i) as HTMLElement).classList.remove("active");
        }
        (this.querySelector("a") as HTMLElement).innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        for (let i: number = 0; i < (document.getElementsByClassName("navbar-item") as HTMLCollection).length; i++) {
            (document.getElementsByClassName("navbar-item").item(i) as HTMLElement).classList.add("active");
        }
        (this.querySelector("a") as HTMLElement).innerHTML = `<i class="fas fa-times"></i>`;
    }
});

// PRODUCTS BUTTON
(document.querySelector(".js-products") as HTMLElement).addEventListener("click", function () {
    const main: HTMLElement = (document.querySelector("main") as HTMLElement);
    main.innerHTML = `
        <div class="d-flex products jc-space-evenly fw-wrap fg-1 ac-flex-start">
            <div class="title">
                <h2> TODOS LOS PRODUCTOS </h2>
            </div>
        </div>`;
    const products: HTMLElement = (main.querySelector(".products") as HTMLElement);
    ui.addProductViews(products, ui.store.catalog);
});

// HOME BUTTON
(document.querySelector(".js-home") as HTMLElement).addEventListener("click", function () {
    const main: HTMLElement = (document.querySelector("main") as HTMLElement);
    main.innerHTML = `
        <div class="carrousel">
            <h2> CARROUSEL </h2>
        </div>
        <div class="d-flex offers jc-space-evenly fw-wrap fg-1 ac-flex-start">
            <div class="title">
                <h2> OFERTAS </h2>
            </div>
        </div>`;
    const offers: HTMLElement = (main.querySelector(".offers") as HTMLElement);
    ui.addOfferViews(offers, ui.store.catalog);
    productButton();
});

// PRODUCT DETAIL
function productButton(): void {
    Array.from(document.getElementsByClassName("offers-item") as HTMLCollection)
        .forEach((offerView) => offerView.addEventListener("click", () => ui.renderDetailView(offerView as HTMLElement)));
}

productButton();

ui.store.fetchComments();