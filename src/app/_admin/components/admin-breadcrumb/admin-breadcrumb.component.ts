import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import "rxjs/add/operator/filter";

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-admin-breadcrumb',
  templateUrl: './admin-breadcrumb.component.html',
  styleUrls: ['./admin-breadcrumb.component.sass']
})
export class AdminBreadcrumbComponent implements OnInit {

	public breadcrumbs: IBreadcrumb[];

	constructor(private router: Router, private route: ActivatedRoute) {
		this.breadcrumbs = [];
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
			let root: ActivatedRoute = this.route.root;
			this.breadcrumbs = this.getBreadcrumbs(root);
		});
	}

	ngOnInit() {
	}

	private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
		const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

		//get the child routes
		let children: ActivatedRoute[] = route.children;

		//return if there are no more children
		if (children.length === 0) {
			return breadcrumbs;
		}

		//iterate over each children
		for (let child of children) {
			//verify primary route
			if (child.outlet !== PRIMARY_OUTLET) {
				continue;
			}

			//verify the custom data property "breadcrumb" is specified on the route
			if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
				return this.getBreadcrumbs(child, url, breadcrumbs);
			}

			if (child.snapshot.url.length != 0) {
				//get the route's URL segment
				let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

				//append route URL to URL
				url += `/${routeURL}`;

				//add breadcrumb
				let breadcrumb: IBreadcrumb = {
					label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
					params: child.snapshot.params,
					url: url
				};
				breadcrumbs.push(breadcrumb);
			}

			//recursive
			return this.getBreadcrumbs(child, url, breadcrumbs);
		}

		//we should never get here, but just in case
		return breadcrumbs;
	}

}
