import Cart from "../entities/Cart";

export default function cartView(cart: Cart): string {
    return `
        <div class="d-flex fd-column ai-center">
            <div class="d-flex cart-items fd-column"></div>
            <div class="check-out-button">
                <button class="button">CONTINUAR COMPRA</button>
            </div>
        </div>
`;
}