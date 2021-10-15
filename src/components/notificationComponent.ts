import CartItem from "../entities/CartItem";

export default function notificationComponent(cartItem: CartItem): string {
    return `
    <div class="d-flex fd-column messege">
        <div>AGREGADO AL CARRITO: ${cartItem.getProduct().getTitle()}</div>
        <div>El carrito tiene ${cartItem.getQuantity()} unidades de este producto.</div>
    </div>
`
}