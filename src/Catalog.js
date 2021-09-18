class Catalog {
    constructor() {
        this._productList = new Array;
    }

    addProduct(product) {
        this._productList.push(product);
    }

    get productList() {
        return this._productList;
    }
}