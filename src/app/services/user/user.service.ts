import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { of } from 'rxjs';



export interface IUser{
    user_id?:string;
    name:string;
    contact:string;
    email:string
}

interface IBank{
    name:string;
    ifsc_code:string;
    account_number:number;
}

interface IDocumnet{
    
    name:string

    code:any
}

type UserRole = 'broker'|'customer';

export interface IProfileUser extends IUser{
   wallet_balance:number
   role:UserRole
   banks?:IBank[],
   avatar?:string
   documents?:IDocumnet[]
}

@Injectable()
export class UserService {


    key = 'auth-user'

    constructor( ){
        this.set( this.currentUser );
    }

    private readonly currentUser:IProfileUser = {
        user_id:'some-id',
        contact:'8850628736',
        email:'singh.nitin@swagkari.com',
        name:'Nitin Singh',
        role:'broker',
        wallet_balance:4300,
        avatar:'https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png'
    }

    get():Observable<IProfileUser>{
       let json = localStorage.getItem( this.key );
       let user:IProfileUser = <IProfileUser>JSON.parse( json )
       return of( user );
    }

    set( user:IProfileUser ):void{
        localStorage.setItem( this.key , JSON.stringify( user ) );        
    }


}