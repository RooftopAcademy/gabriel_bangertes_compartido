import Product from "./Product";

export default class CartItem {

    private product: Product;

    constructor(product: Product) {
        this.product = product;
        this.quantity = 1;
    }

    private quantity: number;

    increaseQuantity(quantity: number = 1): void {
        this.quantity += quantity;
    }

    decreaseQuantity(quantity: number = 1): void {
        this.quantity -= quantity;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getProduct(): Product {
        return this.product;
    }

    private id: number;

    getId(): number {
        return this.id;
    }

    setId(theId: number) {
        this.id = theId;
    }
}