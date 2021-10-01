export default function navbar() {
    return `
        <div class="d-flex navbar jc-space-between fw-wrap ai-center">
            <div class="logotype"><a href="#">LOGO</a></div>
            <div class="navbar-item"><a href="#" class="js-home">Home</a></div>
            <div class="navbar-item"><a href="#" class="js-products">Productos</a></div>
            <div class="search"><a href="#">BUSCAR</a></div>
            <div class="menu"><a href="#" class="hamburger-btn"><i class="ts-hamburger-icon fas fa-bars"></i></a></div>
        </div>`
}