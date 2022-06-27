import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { TokenService } from "./token.service";




@Injectable()
export class  AuthService {


    currentAccessToken:string|null = null
    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    constructor( private http:HttpClient , private tokenService:TokenService ){
        this.loadToken();
    }

    loadToken(){
        let token:string = this.tokenService.get();
        if( token ){
            this.currentAccessToken = token
            this.isAuthenticated.next(true)
        }
        else this.isAuthenticated.next( false )
    }

    login( credentials ){
       return this.http.post( environment.base_url + 'auth/login' , credentials ).pipe(
            map(( { token } : { token:string } ) => { 
                if( token ){
                    this.tokenService.set( token );
                    this.isAuthenticated.next(true);
                     return true
                }
                return false;
            })
        )
    }


    register( ){

    }


    

    

}
