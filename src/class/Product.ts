class Product {

    private _id!: number;
    private _title!: string;
    private _description!: string;
    private _price!: number;
    private _img!: string;
    private _quantity!: number;
    private _comments!: CommentInterface[];

    constructor() {
    }

    addComment(theComment: CommentInterface): void {
        this._comments.push(theComment);
    }

    get comments(): CommentInterface[] {
        return this._comments;
    }

    set id(theId: number) {
        this._id = theId;
    }

    get id(): number {
        return this._id;
    }

    set title(theTitle: string) {
        this._title = theTitle;
    }

    get title(): string {
        return this._title;
    }

    set description(theDescription: string) {
        this._description = theDescription;
    }

    get description(): string {
        return this._description;
    }

    set price(thePrice: number) {
        this._price = thePrice;
    }

    get price(): number {
        return this._price;
    }

    set img(theImgPath: string) {
        this._img = theImgPath;
    }

    get img(): string {
        return this._img;
    }

    set quantity(theQuantity: number) {
        this._quantity = theQuantity;
    }

    get quantity(): number {
        return this._quantity;
    }
}