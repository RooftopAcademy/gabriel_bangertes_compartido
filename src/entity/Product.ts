import CommentInterface from '../interface/CommentInterface';

export default class Product {

    constructor() {
        this.comments = [];
    }

    private id!: number;

    getId(): number {
        return this.id;
    }

    setId(theId: number) {
        this.id = theId;
    }

    private title!: string;

    getTitle(): string {
        return this.title;
    }

    setTitle(theTitle: string) {
        this.title = theTitle;
    }

    private description!: string;

    getDescription(): string {
        return this.description;
    }

    setDescription(theDescription: string) {
        this.description = theDescription;
    }

    private price!: number;

    getPrice(): number {
        return this.price;
    }

    setPrice(thePrice: number) {
        this.price = thePrice;
    }

    private img!: string;

    getImg(): string {
        return this.img;
    }

    setImg(theImgPath: string) {
        this.img = theImgPath;
    }

    private quantity!: number;

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(theQuantity: number) {
        this.quantity = theQuantity;
    }

    private comments!: CommentInterface[];

    getComments(): CommentInterface[] {
        return [...this.comments];
    }

    addComment(theComment: CommentInterface): void {
        this.comments.push(theComment);
    }
}