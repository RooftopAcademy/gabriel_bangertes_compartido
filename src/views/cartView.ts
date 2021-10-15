import Cart from "../entities/Cart";

export default function cartView(cart: Cart): string {
    return `
        <div class="d-flex fd-column ai-center">
            <div class="d-flex cart-items fd-column"></div>
            <br>
            <div class="totals d-flex jc-flex-end">
                <div class="price">
                    TOTAL $ ${cart.getTotal()}
                </div>
            </div>
            <br>
            <div class="check-out-button">
                <button class="button">CONTINUAR COMPRA</button>
            </div>
        </div>
`;
}