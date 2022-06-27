import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {

    key = 'auth-token'

    get():string{
       return localStorage.getItem(this.key)
    }

    set( token:string ):void{
        localStorage.setItem(this.key , token );
    }


}