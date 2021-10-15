export default function navbarComponent() {
    return `
        <div class="d-flex navbar jc-space-between fw-wrap ai-center">
            <div class="logotype"><a href="#"><img class="logo-img" src="favicon.ico" alt="CARRITO"></a></div>
            <div class="navbar-item"><a href="#" class="js-home">HOME</a></div>
            <div class="navbar-item"><a href="#" class="js-products">PRODUCTOS</a></div>
            <div class="cart"><a href="#" class="cart-button"><i class="ts-cart-icon fas fa-shopping-cart"></i></a></div>
            <div class="menu"><a href="#" class="hamburger-btn"><i class="ts-hamburger-icon fas fa-bars"></i></a></div>
        </div>`
}