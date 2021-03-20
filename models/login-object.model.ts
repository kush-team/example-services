export class LoginObject {
	public emailAddress: string;
	public password: string;

	constructor( object: any){
		this.emailAddress = (object.emailAddress) ? object.emailAddress : null;
		this.password = (object.password) ? object.password : null;
	}	
}
