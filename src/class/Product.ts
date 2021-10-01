import { CommentInterface } from './interfaces';

export default class Product {

    constructor() {
        this._comments = [];
    }

    private _id!: number;

    get id(): number {
        return this._id;
    }

    set id(theId: number) {
        this._id = theId;
    }

    private _title!: string;

    get title(): string {
        return this._title;
    }

    set title(theTitle: string) {
        this._title = theTitle;
    }

    private _description!: string;

    get description(): string {
        return this._description;
    }

    set description(theDescription: string) {
        this._description = theDescription;
    }

    private _price!: number;

    get price(): number {
        return this._price;
    }

    set price(thePrice: number) {
        this._price = thePrice;
    }

    private _img!: string;

    get img(): string {
        return this._img;
    }

    set img(theImgPath: string) {
        this._img = theImgPath;
    }

    private _quantity!: number;

    get quantity(): number {
        return this._quantity;
    }

    set quantity(theQuantity: number) {
        this._quantity = theQuantity;
    }

    private _comments!: CommentInterface[];

    get comments(): CommentInterface[] {
        return [...this._comments];
    }

    addComment(theComment: CommentInterface): void {
        this._comments.push(theComment);
    }
}