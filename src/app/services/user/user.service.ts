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
   documents?:IDocumnet[]
}

@Injectable()
export class UserService {

    private readonly currentUser:IProfileUser = {
        user_id:'some-id',
        contact:'8850628736',
        email:'singh.nitin@swagkari.com',
        name:'Nitin Singh',
        role:'broker',
        wallet_balance:4300
    }

    get():Observable<IProfileUser>{
        return of( this.currentUser );
    }


}