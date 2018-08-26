import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.sass']
})
export class AdminSidebarComponent implements OnInit {
	route_uri: string

	constructor(private router: Router) {
		this.router.events.subscribe((res) => {
			this.route_uri = this.router.url
		})
	}

	ngOnInit() {
	}

	checkActive(uri) {
		return this.route_uri.includes(uri)
	}
}