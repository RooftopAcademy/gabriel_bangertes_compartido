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

    constructor(theDocument: Document) {
        this.store = new Store;
        this.app = theDocument;
        this.nav = theDocument.querySelector('nav');
        this.carrousel = theDocument.querySelector('.carrousel');
        this.main = theDocument.querySelector('main');
        this.footer = theDocument.querySelector('.footer');

        this.render(this.carrousel, carrouselComponent);

        this.render(this.footer, footerComponent);

        this.fetchProducts(
            this.app.querySelector('.offers'),
            this.productButton
        )

        this.render(this.nav, navbarComponent);

        this.addNavbarActions(this.nav);
    }

    private store: Store;
    private app: Document;
    private nav: HTMLElement;
    private carrousel: HTMLElement;
    private main: HTMLElement;
    private footer: HTMLElement;

    getStore() {
        return this.store;
    }

    render(element: HTMLElement, component: () => string): void {
        element.innerHTML = component();
    }

    toggleHamburgerIcon(iconElement: HTMLElement): void {
        iconElement.classList.toggle('fa-bars');
        iconElement.classList.toggle('fa-times');
    }

    toggleNavbar(nav: HTMLElement = this.nav): void {
        Array.from(nav.getElementsByClassName('navbar-item') as HTMLCollection)
            .forEach((item: HTMLElement) => {
                item.classList.toggle('active');
            });

        this.toggleHamburgerIcon(nav.querySelector('.ts-hamburger-icon'));
    }

    addNavbarActions(navbar: HTMLElement): void {
        (navbar.querySelector('.menu') as HTMLElement)
            .addEventListener('click',
                () => this.toggleNavbar(navbar as HTMLElement));
    }

    fetchProducts(offers: HTMLElement, productButton: () => void): void {
        fetch('products.json')
            .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
            .then((json: ProductInterface[]) => {
                this.addOfferComponents(offers, this.store.addProducts(json));
                productButton();
            })
    }

   productButton(): void {
        Array.from(document.querySelectorAll('.offers-item, .products-item') as NodeListOf<HTMLElement>)
            .forEach((offerView) => offerView.addEventListener(
                'click',
                () => this.renderDetailView(offerView as HTMLElement)
            ));
    }

    addOfferComponents(theHtmlElement: HTMLElement, theOfferList: Product[]) {
        theOfferList.forEach((offer: Product) => {
            theHtmlElement.innerHTML += offerComponent(offer);
        });
    }

    addProductComponents(theHtmlElement: HTMLElement, theProductList: Product[]) {
        theProductList.forEach((product: Product) => {
            theHtmlElement.innerHTML += productComponent(product);
        });
    }

    renderDetailView(offerViewElement: HTMLElement) {
        const offer: Product = this.store.getProductById(
            (offerViewElement.dataset.id) ? +offerViewElement.dataset.id : 0);
        this.main.innerHTML = productDetailView(offer);

        offer.getComments().forEach((comment: CommentInterface) => {
            this.main.innerHTML += commentComponent(comment);
        });
    }
}