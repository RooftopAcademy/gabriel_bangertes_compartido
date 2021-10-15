export default function footerComponent(): string {
    return `
    <div class="d-flex jc-space-evenly footer ai-center">
        <div class="d-flex fd-column footer-item ai-center">
            <div class="footer-title">Navegaci&oacute;n</div>
            <br>
            <div class="d-flex fd-column navigation-list">
                <div class="navigation-list-item"><a class="js-home" href="#">Home</a></div>
                <div class="navigation-list-item"><a class="js-products" href="#">Productos</a></div>
                <div class="navigation-list-item"><a class="js-cart" href="#">Carrito</a></div>
            </div>
        </div>
        <div class="d-flex fd-column footer-item ai-center">
            <div class="logotype"><a href="#"><img class="logo-img" src="favicon.ico" alt="CARRITO"></a></div>
            <p>CoffeStore es el s&iacute;tio donde puedes comprar el caf&eacute; de especialidad de la m&aacute;s alta calidad.</p>
            <p>Contamos con el respaldo de m&aacute;s de 10 a&ntilde;os en el mercado y el aval de miles de clientes.</p>
        </div>
        <div class="d-flex fd-column footer-item ai-center">
            <div class="footer-title">Contacto</div>
            <br>
            <div class="d-flex fd-column contact-list">
                <div class="contact-list-item">CoffeStore Corporation&copy;</div>
                <div class="contact-list-item">info@coffestore.com</div>
                <div class="contact-list-item">Tel: +54 842 4987-564</div>
            </div>
            <div class="d-flex jc-space-evenly socials">
                <div class="socials-item"><a href="#"><i class="fas fa-facebook-square"></i></a></div>
                <div class="socials-item"><a href="#"><i class="fas fa-twitter-square"></i></a></div>
                <div class="socials-item"><a href="#"><i class="fas fa-instagram-square"></i></a></div>
            </div>
        </div>
    </div>`
}
