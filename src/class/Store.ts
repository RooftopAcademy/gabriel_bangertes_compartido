import { Catalog } from "./Catalog";
import { User } from "./User";
import { Product } from "./Product";
import { ProductInterface, CommentInterface } from "./interfaces";

export class Store {

    private _catalog: Catalog;
    private _user: User;

    constructor() {
        this._catalog = new Catalog;
        this._user = new User;
    }

    fetchProducts(): void {
        fetch("../json/products.json")
        .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
        .then((json: ProductInterface[]) => {
            json.forEach((product: ProductInterface) => {
                this._catalog.addProduct(product);
            })
        })
    }

    fetchComments(): void {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
        .then((json: CommentInterface[]) => {
            json.forEach((comment: CommentInterface) => {
                if (this.getProductById(comment.postId)) {
                    this.getProductById(comment.postId).addComment(comment);
                }
            })
        })
    }

    get catalog(): Product[] {
        return this._catalog.productList;
    }

    getProductById(id: number): Product {
        return this._catalog.findProduct(id);
    }
}
