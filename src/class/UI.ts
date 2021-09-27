import { Store } from "./Store";
import { Product } from "./Product";
import { CommentInterface } from "./interfaces";
import { productDetailView } from "../view/productDetailView";
import { productView } from "../view/productView";
import { offerView } from "../view/offerView";
import { commentView } from "../view/commentView";
import { ProductInterface } from "./interfaces";

export class UI {
    
    private _store: Store;

    constructor() {
        this._store = new Store;
    }

    get store() {
        return this._store;
    }

    fetchProducts(offers: HTMLElement, productButton: () => void): void {
        fetch("products.json")
        .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
        .then((json: ProductInterface[]) => {
            this.addOfferViews(offers, this._store.addProducts(json));
            productButton();
        })
    }

    addOfferViews(theHtmlElement: HTMLElement, theOfferList: Product[]) {
        theOfferList.forEach((offer: Product) => theHtmlElement.innerHTML += offerView(offer));
    }

    addProductViews(theHtmlElement: HTMLElement, theProductList: Product[]) {
        theProductList.forEach((product: Product) => theHtmlElement.innerHTML += productView(product));
    }

    renderDetailView(offerViewElement: HTMLElement) {
        const offer: Product = this._store.getProductById((offerViewElement.dataset.id) ? +offerViewElement.dataset.id : 0);
        const main: HTMLElement = document.querySelector("main") as HTMLElement;
        main.innerHTML = productDetailView(offer);
        offer.comments.forEach((comment: CommentInterface) => main.innerHTML += commentView(comment));
    }
}