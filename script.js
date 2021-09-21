let carrousel = "<h2>CARROUSEL</h2>";
document.querySelector(".carrousel").innerHTML = carrousel;

let ui = new UI;
let offers = document.querySelector(".offers");
ui.addOfferViews(offers, ui.store.catalog);

// NAVBAR
document.querySelector(".menu").addEventListener("click", function () {
    if (document.querySelector(".navbar-item").classList.contains("active")) {
        for (let i = 0; i < document.getElementsByClassName("navbar-item").length; i++) {
            document.getElementsByClassName("navbar-item").item(i).classList.remove("active");
        }
        this.querySelector("a").innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        for (let i = 0; i < document.getElementsByClassName("navbar-item").length; i++) {
            document.getElementsByClassName("navbar-item").item(i).classList.add("active");
        }
        this.querySelector("a").innerHTML = `<i class="fas fa-times"></i>`;
    }
});

// PRODUCTS BUTTON
document.querySelector(".js-products").addEventListener("click", function () {
    let main = document.querySelector("main");
    main.innerHTML = `
        <div class="d-flex products jc-space-evenly fw-wrap fg-1 ac-flex-start">
            <div class="title">
                <h2> TODOS LOS PRODUCTOS </h2>
            </div>
        </div>`;
    let products = main.querySelector(".products");
    ui.addProductViews(products, ui.store.catalog);
});

// HOME BUTTON
document.querySelector(".js-home").addEventListener("click", function () {
    let main = document.querySelector("main");
    main.innerHTML = `
        <div class="carrousel">
            <h2> CARROUSEL </h2>
        </div>
        <div class="d-flex offers jc-space-evenly fw-wrap fg-1 ac-flex-start">
            <div class="title">
                <h2> OFERTAS </h2>
            </div>
        </div>`;
    let offers = main.querySelector(".offers");
    ui.addOfferViews(offers, ui.store.catalog);
    productButton();
});

// PRODUCT DETAIL
function productButton() {
    Array.from(document.getElementsByClassName("offers-item"))
        .forEach((offerView) => offerView.addEventListener("click", () => ui.renderDetailView(offerView)));
}

productButton();

ui.store.fetchComments();