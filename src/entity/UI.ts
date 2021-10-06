import Store from './Store';
import Product from './Product';
import ProductInterface from '../interface/ProductInterface';
import CommentInterface from '../interface/CommentInterface';
import productDetailView from '../view/productDetailView';
import productComponent from '../component/productComponent';
import offerComponent from '../component/offerComponent';
import commentComponent from '../component/commentComponent';
import navbarComponent from '../component/navbarComponent';
import carrouselComponent from "../component/carrouselComponent";
import footerComponent from "../component/footerComponent";

export default class UI {

    constructor() {
        this.store = new Store;
    }

    private store: Store;

    getStore() {
        return this.store;
    }

    renderNavbar(nav: HTMLElement): void {
        nav.innerHTML = navbarComponent();
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

    renderCarrousel(carrousel: HTMLElement): void {
        carrousel.innerHTML = carrouselComponent();
    }

    renderFooter(footer: HTMLElement): void {
        footer.innerHTML = footerComponent();
    }

    fetchProducts(offers: HTMLElement, productButton: () => void): void {
        fetch('products.json')
            .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
            .then((json: ProductInterface[]) => {
                this.addOfferViews(offers, this.store.addProducts(json));
                productButton();
            })
    }

    addOfferViews(theHtmlElement: HTMLElement, theOfferList: Product[]) {
        theOfferList.forEach((offer: Product) => {
            theHtmlElement.innerHTML += offerComponent(offer);
        });
    }

    addProductViews(theHtmlElement: HTMLElement, theProductList: Product[]) {
        theProductList.forEach((product: Product) => {
            theHtmlElement.innerHTML += productComponent(product);
        });
    }

    renderDetailView(offerViewElement: HTMLElement) {
        const offer: Product = this.store.getProductById(
            (offerViewElement.dataset.id) ? +offerViewElement.dataset.id : 0);
        const main: HTMLElement = document.querySelector('main') as HTMLElement;
        main.innerHTML = productDetailView(offer);

        offer.getComments().forEach((comment: CommentInterface) => {
            main.innerHTML += commentComponent(comment);
        });
    }
}