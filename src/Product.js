class Product {

    constructor() {
        this._id = Number;
        this._title = String;
        this._description = String;
        this._price = Number;
        this._img = String;
        this._quantity = Number;
    }

    set id(theId) {
        this._id = theId;
    }

    get id() {
        return this._id;
    }

    set title(theTitle) {
        this._title = theTitle;
    }

    get title() {
        return this._title;
    }

    set description(theDescription) {
        this._description = theDescription;
    }

    get description() {
        return this._description;
    }

    set price(thePrice) {
        this._price = thePrice;
    }

    get price() {
        return this._price;
    }

    set img(theImgPath) {
        this._img = theImgPath;
    }

    get img() {
        return this._img;
    }

    set quantity(theQuantity) {
        this._quantity = theQuantity;
    }

    get quantity() {
        return this._quantity;
    }
}
