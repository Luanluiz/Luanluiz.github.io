import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean |
        UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (!localStorage.getItem('login')) {
            this.router.navigate(['login']);
            return of(false);
        }

        return of(true);
    }


}
