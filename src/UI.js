class UI {
    constructor() {
        this._store = new Store;
        this._store.addProducts();
    }

    get store() {
        return this._store;
    }

    addOfferViews(theHtmlElement, theOfferList) {
        theOfferList.forEach((offer) => theHtmlElement.innerHTML += offerView(offer));
    }

    addProductViews(theHtmlElement, theProductList) {
        theProductList.forEach((product) => theHtmlElement.innerHTML += productView(product));
    }

    renderDetailView(offerView) {
        document.querySelector("main").innerHTML = productDetailView(this._store.getProductById(offerView.dataset.id));
    }
}