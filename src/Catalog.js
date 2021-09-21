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

    getProduct(id) {
        return this._productList.find(product => product.id == id);
    }
}