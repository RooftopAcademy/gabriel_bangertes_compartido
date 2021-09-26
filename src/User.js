class User {
    constructor() {
        this._userId = Number;
        this._username = String;
        this._password = String;
        this._email = String;
    }

    get userId() {
        return _userId;
    } 

    get username() {
        return _username;
    } 

    get email() {
        return _email;
    } 

    set userId(theUserId) {
        this._userId = theUserId;
    }

    set username(theUsername) {
        this._username = theUsername;
    }

    set email(theEmail) {
        this._email = theEmail;
    }
}