export class User {

    private _password!: string;

    constructor() {
    }

    private _id!: number;

    get id() {
        return this._id;
    }

    set id(theId) {
        this._id = theId;
    }

    private _username!: string;

    get username() {
        return this._username;
    }

    set username(theUsername) {
        this._username = theUsername;
    }

    private _email!: string;

    get email() {
        return this._email;
    }

    set email(theEmail) {
        this._email = theEmail;
    }
}