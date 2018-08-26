import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from '../../environments/environment';

export const TOKEN_NAME: string = 'current_user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

	constructor(private http: HttpClient) { }

	login(email: string, password: string) {
		return this.http.post<any>(`api/users/auth`, {email: email, password: password})
		.pipe(map(res => {
			var user = res.data;
			if (user && user.token) {
				localStorage.setItem(TOKEN_NAME, JSON.stringify(user));
			}

			return user;
		}));
	}

	getUser(): string {
		return localStorage.getItem(TOKEN_NAME);
	}

	getToken(): string {
		var user = this.getUser();
		if (!user) return null;
		user = JSON.parse(user);
		return user['token'];
	}

	getTokenExpirationDate(token: string): Date {
		const decoded = jwt_decode(token);

		if (decoded.exp === undefined) return null;

		const date = new Date(0); 
		date.setUTCSeconds(decoded.exp);
		return date;
	}

	isTokenExpired(token?: string): boolean {
		if(!token) token = this.getToken();
		if(!token) return true;

		const date = this.getTokenExpirationDate(token);
		if(date === undefined) return false;
		return !(date.valueOf() > new Date().valueOf());
	}


	logout() {
		localStorage.removeItem(TOKEN_NAME);
	}
}
