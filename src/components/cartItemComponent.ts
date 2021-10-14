import CartItem from "../entities/CartItem";

export default function cartItemComponent(cartItem: CartItem): string {
    return `
    <div class="d-flex cart-item jc-space-evenly ai-center">
        <div>
            <img class="product-img" src="${cartItem.getProduct().getImg()}" alt="${cartItem.getProduct().getTitle()}">
        </div>
        <div>${cartItem.getProduct().getTitle()}</div>
        <div>$ ${cartItem.getProduct().getPrice()}</div>
        <div class="d-flex jc-space-evenly ai-center">
            <div><button class="plus-button button"><icon class="fas fa-minus"></icon></button></div>
            <div>${cartItem.getQuantity()}</div>
            <div><button class="minus-button button"><icon class="fas fa-plus"></icon></button></div>
        </div>
        <div>$ ${cartItem.getProduct().getPrice() * cartItem.getQuantity()}</div>
    </div>
    `;
}