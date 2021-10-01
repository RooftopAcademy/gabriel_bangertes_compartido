import {Store} from './Store';
import {Product} from './Product';
import {CommentInterface, ProductInterface} from './interfaces';
import {productDetailView} from '../view/productDetailView';
import {productView} from '../view/productView';
import {offerView} from '../view/offerView';
import {commentView} from '../view/commentView';
import {navbar} from '../component/navbar';

export class UI {

    constructor() {
        this._store = new Store;
    }

    private _store: Store;

    get store() {
        return this._store;
    }

    renderNavbar(nav: HTMLElement): void {
        nav.innerHTML = navbar();
    }

    toggleHamburgerIcon(iconElement: HTMLElement): void {
        iconElement.classList.toggle('fa-bars');
        iconElement.classList.toggle('fa-times');
    }

    toggleNavbar(nav: HTMLElement): void {
        Array.from(nav.getElementsByClassName('navbar-item') as HTMLCollection)
            .forEach((item: HTMLElement) => {
                item.classList.toggle('active');
            });
        this.toggleHamburgerIcon(nav.querySelector('.ts-hamburger-icon'));
    }

    fetchProducts(offers: HTMLElement, productButton: () => void): void {
        fetch('products.json')
            .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
            .then((json: ProductInterface[]) => {
                this.addOfferViews(offers, this._store.addProducts(json));
                productButton();
            })
    }

    addOfferViews(theHtmlElement: HTMLElement, theOfferList: Product[]) {
        theOfferList.forEach((offer: Product) => {
            theHtmlElement.innerHTML += offerView(offer);
        });
    }

    addProductViews(theHtmlElement: HTMLElement, theProductList: Product[]) {
        theProductList.forEach((product: Product) => {
            theHtmlElement.innerHTML += productView(product);
        });
    }

    renderDetailView(offerViewElement: HTMLElement) {
        const offer: Product = this._store.getProductById(
            (offerViewElement.dataset.id) ? +offerViewElement.dataset.id : 0);
        const main: HTMLElement = document.querySelector('main') as HTMLElement;
        main.innerHTML = productDetailView(offer);
        offer.comments.forEach((comment: CommentInterface) => {
            main.innerHTML += commentView(comment);
        });
    }
}