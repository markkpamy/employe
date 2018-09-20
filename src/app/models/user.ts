export class User {
    public userlogin = 'admin';
    public userpwd = 'secret';
    public userid: number;

    constructor() {

    }

    public getUserPwd(): string {
        return this.userpwd;
    }
}
