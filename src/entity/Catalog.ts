import ProductInterface from '../interface/ProductInterface';
import Product from './Product';

export default class Catalog {

    constructor() {
        this.productList = [];
    }

    private productList: Product[];

    getProductList(): Product[] {
        return [...this.productList];
    }

    addProduct(product: ProductInterface): void {
        const newProduct: Product = new Product;
        newProduct.setId(product.id);
        newProduct.setTitle(product.title);
        newProduct.setDescription(product.description);
        newProduct.setPrice(product.price);
        newProduct.setImg(product.img);
        newProduct.setQuantity(product.quantity);
        this.productList.push(newProduct);
    }

    removeProduct(product: Product): void {
        if (this.productList.includes(product)) {
            this.productList.slice(this.productList.indexOf(product), 1);
        }
    }

    findProduct(id: number): Product {
        return this.productList.find((product: Product) => product.getId() == id) as Product;
    }
}