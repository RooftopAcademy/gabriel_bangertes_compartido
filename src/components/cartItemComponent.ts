import CartItem from "../entities/CartItem";

export default function cartItemComponent(cartItem: CartItem): string {
    return `
    <div class="d-flex cart-item">
        <div>
            <img src="${cartItem.getProduct().getImg()}" alt="${cartItem.getProduct().getTitle()}">
        </div>
        <div>${cartItem.getProduct().getTitle()}</div>
        <div>$ ${cartItem.getProduct().getPrice()}</div>
        <div>x ${cartItem.getQuantity()} u</div>
        <div>$ ${cartItem.getProduct().getPrice() * cartItem.getQuantity()}</div>
    </div>
    `;
}