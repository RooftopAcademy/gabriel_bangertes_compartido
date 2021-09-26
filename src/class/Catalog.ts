import { Product } from "./Product";

export class Catalog {

    private _productList: Product[];

    constructor() {
        this._productList = [];
    }

    addProduct(product: Product) {
        this._productList.push(product);
    }

    get productList(): Product[] {
        return this._productList;
    }

    findProduct(id: number): Product {
        return this._productList.find((product: Product) => product.id == id) as Product;
    }
}