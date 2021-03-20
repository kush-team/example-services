export class User {
    public id: number;
    public fullName: string;
    public emailAddress: string;

    constructor (id: number, fullName: string, emailAddress: string) {
    	this.id = id;
    	this.fullName = fullName;
    	this.emailAddress = emailAddress;
    }
}
