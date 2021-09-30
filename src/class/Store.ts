import {Catalog} from './Catalog';
import {User} from './User';
import {Product} from './Product';
import {CommentInterface, ProductInterface} from './interfaces';

export class Store {

    private _user: User;

    constructor() {
        this._catalog = new Catalog;
        this._user = new User;
    }

    private _catalog: Catalog;

    get catalog(): Product[] {
        return this._catalog.productList;
    }

    addProducts(productList: ProductInterface[]): Product[] {
        productList.forEach((product: ProductInterface) => this._catalog.addProduct(product));
        return this.catalog;
    }

    fetchComments(): void {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response: Response) => (response.ok ? response.json() : Promise.reject(response)))
            .then((json: CommentInterface[]) => {
                json.forEach((comment: CommentInterface) => {
                    if (this.getProductById(comment.postId)) {
                        this.getProductById(comment.postId).addComment(comment);
                    }
                })
            })
    }

    getProductById(id: number): Product {
        return this._catalog.findProduct(id);
    }
}
