import Store from './Store';
import Product from './Product';
import ProductInterface from '../interfaces/ProductInterface';
import CommentInterface from '../interfaces/CommentInterface';
import productDetailView from '../views/productDetailView';
import productComponent from '../components/productComponent';
import offerComponent from '../components/offerComponent';
import commentComponent from '../components/commentComponent';
import navbarComponent from '../components/navbarComponent';
import carrouselComponent from "../components/carrouselComponent";
import footerComponent from "../components/footerComponent";
import cartView from "../views/cartView";

export default class UI {

    constructor(theDocument: Document) {
        this.store = new Store;
        this.app = theDocument;
        this.nav = theDocument.querySelector('nav');
        this.carrousel = theDocument.querySelector('.carrousel');
        this.main = theDocument.querySelector('main');
        this.footer = theDocument.querySelector('.footer');

        this.render(this.carrousel, carrouselComponent());

        this.render(this.footer, footerComponent());

        this.fetchProducts(
            this.app.querySelector('.offers'),
            this.productButton
        )

        this.render(this.nav, navbarComponent());

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

    render(element: HTMLElement, component: string): void {
        element.innerHTML = component;
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

        this.attachGoToCartButtonActions();
    }

    goToCartButtonListener(): () => void {
        return () => this.render(this.main, cartView(this.store.getCart()));
    }

    attachGoToCartButtonActions(): void {
        this.main.querySelector('.cart-button').addEventListener(
            'click',
            this.goToCartButtonListener()
        )
    }
}