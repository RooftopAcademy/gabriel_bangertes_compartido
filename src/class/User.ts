export default class User {

    // private password!: string;

    constructor() {
    }

    private id!: number;

    getId() {
        return this.id;
    }

    setId(theId: number) {
        this.id = theId;
    }

    private username!: string;

    getUsername() {
        return this.username;
    }

    setUsername(theUsername: string) {
        this.username = theUsername;
    }

    private email!: string;

    getEmail() {
        return this.email;
    }

    setEmail(theEmail: string) {
        this.email = theEmail;
    }
}