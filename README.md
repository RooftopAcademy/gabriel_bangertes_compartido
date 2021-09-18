## Classes:

| UI |
|---|
| - store: Store |
| + addOfferViews(HTMLElement, Product[])<br>+ addProductViews(HTMLElement, Product[])<br>+ getters<br>+ setters |

| Store |
|---|
| - catalog: Catalog<br>- user: User |
| + addProducts()<br>+ catalog(): Product[]<br>+ getters<br>+ setters |

| Catalog |
|---|
| - productList: Product[] |
| + addProduct(Product)<br>+ getters<br>+ setters |

| Product |
|---|
| - id: Number<br>- title: String<br>- description: String<br>- img: String<br>- quantity: Number |
| + decreaseQuantity(Number)<br>+ increaseQuantity(Number)<br>+ applyDiscount(Offer)<br>+ getters<br>+ setters |

| User |
|---|
| - userId: Number<br>- username: String<br>- password: String<br>- email: String |
| + getters<br>+ setters |

| Offer |
|---|
| - discount: Number<br>- initialDate: Date<br>- finishDate: Date |
| + getters<br>+ setters |

| Cart |
|---|
| - items: CartItem[] |
| + getters<br>+ setters |

| CartItem |
|---|
| - item: Item<br>- quantity: Number |
| + getters<br>+ setters |

| Sale |
|---|
| - cart: Cart<br> - payment: Payment<br>- date: Date<br>- state: String |
| + getters<br>+ setters |

| Payment |
|---|
| - id: Number |
| + getters<br>+ setters |