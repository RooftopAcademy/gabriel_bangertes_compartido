import CartItem from "./CartItem";
import Product from "./Product";

export default class Cart {

    private items: CartItem[];

    constructor() {
        this.items = [];
    }

    getItems(): CartItem[] {
        return this.items;
    }

    addItem(product: Product): void {
        if (this.getProducts().includes(product)) {
            this.getItemByProduct(product).increaseQuantity();
            return;
        }

        this.items = this.items.concat(new CartItem(product));
    }

    decreaseProductQuantity(item: CartItem): void {
        (item.getQuantity() > 1) ? item.decreaseQuantity() : this.removeItem(item);
    }

    removeItem(itemToRemove: CartItem): void {
        this.removeItemByProduct(itemToRemove.getProduct());
    }

    removeItemByProduct(product: Product): void {
        this.items = this.items.filter(
            (item: CartItem) => (item.getProduct() !== product)
        )
    }

    getProducts(): Product[] {
        return this.items.map((item: CartItem) => item.getProduct());
    }

    getItemByProduct(product: Product): CartItem {
        return this.items.filter(
            (item: CartItem) => (item.getProduct() == product)
        )[0];
    }

    getTotal(): number {
        return this.items.reduce(
            (previous: number, current: CartItem) => previous + current.getSubTotal(), 0
        );
    }
}
