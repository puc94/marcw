import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export const TOKEN_NAME: string = 'current_user';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.sass']
})
export class AdminNavbarComponent implements OnInit {
	constructor(private router: Router) {
	}

	ngOnInit() {
	}

	logout() {
		localStorage.removeItem(TOKEN_NAME);
		this.router.navigate(['/']);
	}
}