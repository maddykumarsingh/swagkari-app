import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter , map, take } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:AuthService , private router:Router ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAuthenticated.pipe(
      filter( val =>  val !== null ),
      take(1),
      map( isAuthenticated => {
        if( ! isAuthenticated ) this.router.navigate(['auth/login'])
        return isAuthenticated
      })
    )
  }
  
}
