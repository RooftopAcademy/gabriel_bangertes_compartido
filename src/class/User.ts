class User {

    private _id!: number;
    private _username!: string;
    private _password!: string;
    private _email!: string;

    constructor() {
    }

    get id() {
        return this._id;
    } 

    get username() {
        return this._username;
    } 

    get email() {
        return this._email;
    } 

    set id(theId) {
        this._id = theId;
    }

    set username(theUsername) {
        this._username = theUsername;
    }

    set email(theEmail) {
        this._email = theEmail;
    }
}