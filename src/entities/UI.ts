import Store from './Store';
import Product from './Product';
import ProductInterface from '../interfaces/ProductInterface';
import CommentInterface from '../interfaces/CommentInterface';
import productDetailView from '../views/productDetailView';
import offerComponent from '../components/offerComponent';
import commentComponent from '../components/commentComponent';
import navbarComponent from '../components/navbarComponent';
import carrouselComponent from "../components/carrouselComponent";
import footerComponent from "../components/footerComponent";
import cartView from "../views/cartView";
import cartItemComponent from "../components/cartItemComponent";
import CartItem from "./CartItem";
import notificationComponent from "../components/notificationComponent";

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
        (navbar.querySelector('.cart-button') as HTMLElement)
            .addEventListener('click', this.goToCartButtonListener());
    }

    fetchProducts(offers: HTMLElement, productButton: () => void): void {
        fetch('products.json')
            .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
            .then((json: ProductInterface[]) => {
                this.addComponents(offers, offerComponent, this.store.addProducts(json));
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

    addComponents(theHTMLElement: HTMLElement, component: (item: object) => string, list: object[]) {
        list.forEach((item: object) => {
            theHTMLElement.innerHTML += component(item);
        })
    }

    renderDetailView(offerViewElement: HTMLElement) {
        const offer: Product = this.store.getProductById(
            (offerViewElement.dataset.id) ? +offerViewElement.dataset.id : 0);
        this.main.innerHTML = productDetailView(offer);

        offer.getComments().forEach((comment: CommentInterface) => {
            this.main.innerHTML += commentComponent(comment);
        });

        this.attachGoToCartButtonActions();
        this.attachAddToCartButtonActions();
    }

    goToCartButtonListener(): () => void {
        return () => {
            this.render(this.main, cartView(this.store.getCart()));
            if (this.store.getCart().getItems().length) {
                const cartItems: HTMLElement = this.main.querySelector('.cart-items');
                this.addComponents(cartItems, cartItemComponent, this.store.getCart().getItems());
                this.attachPlusButtonActions();
                this.attachMinusButtonActions();
            }
        }
    }

    attachGoToCartButtonActions(): void {
        this.main.querySelector('.cart-button').addEventListener(
            'click',
            this.goToCartButtonListener()
        )
    }

    addToCartButtonListener(id: number): () => void {
        return () => {
            this.store.getCart().addItem(
                this.store.getProductById(id)
            );

            const notification: HTMLElement = this.main.querySelector('.notification') as HTMLElement;
            if (notification) {
                this.render(notification, notificationComponent(
                    this.store.getCart()
                        .getItemByProduct(this.store.getProductById(id))
                    )
                )
                setTimeout(() => notification.innerHTML = '', 2000);
            }
        }
    }

    attachAddToCartButtonActions(): void {
        const button: HTMLElement = this.main.querySelector('.add-to-cart-button') as HTMLElement;
        button.addEventListener(
            'click',
            this.addToCartButtonListener(+button.dataset.id)
        )
    }

    minusButtonListener(id: number): () => void {
        return () => {
            const cartItem: CartItem = this.store
                .getCart()
                .getItemByProduct(this.store.getProductById(id));
            this.store.getCart().decreaseProductQuantity(cartItem);
            this.goToCartButtonListener()();
        }
    }

    attachMinusButtonActions(): void {
        Array.from(this.main.querySelectorAll('.minus-button') as NodeListOf<HTMLElement>)
            .forEach((minusButtonElement: HTMLElement) => {
                    minusButtonElement.addEventListener(
                        'click',
                        () => this.minusButtonListener(+minusButtonElement.dataset.id)()
                    );
                }
            );
    }

    plusButtonListener(id: number): () => void {
        return () => {
            this.addToCartButtonListener(id)();
            this.goToCartButtonListener()();
        }
    }

    attachPlusButtonActions(): void {
        Array.from(this.main.querySelectorAll('.plus-button') as NodeListOf<HTMLElement>)
            .forEach((plusButtonElement: HTMLElement) => {
                plusButtonElement.addEventListener(
                    'click',
                    () => this.plusButtonListener(+plusButtonElement.dataset.id)()
                );
            }
        );
    }

}