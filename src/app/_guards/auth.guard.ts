import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthenticationService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (!this.authService.isTokenExpired()) {
			return true;
		}

		this.router.navigate(['/login'], { queryParams: {
			returnUrl: state.url
		} });
		return false;
	}
}
