import { ProductInterface } from "./interfaces";
import { Product } from "./Product";

export class Catalog {

    private _productList: Product[];

    constructor() {
        this._productList = [];
    }

    addProduct(product: ProductInterface) {
        const newProduct: Product = new Product;
        newProduct.id = product.id;
        newProduct.title = product.title;
        newProduct.description = product.description;
        newProduct.price = product.price;
        newProduct.img = product.img;
        newProduct.quantity = product.quantity;
        this._productList.push(newProduct);
    }

    get productList(): Product[] {
        return this._productList;
    }

    findProduct(id: number): Product {
        return this._productList.find((product: Product) => product.id == id) as Product;
    }
}