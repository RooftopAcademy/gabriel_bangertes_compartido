import Cart from "../entities/Cart";

export default function cartView(cart: Cart): string {
    return `
        <div class="d-flex fd-column">
            <div class="cart-items"></div>
            <div class="check-out-button">
                <button class="button">CONTINUAR COMPRA</button>
            </div>
        </div>
`;
}