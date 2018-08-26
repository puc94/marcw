import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from '../../../_services';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.sass']
})
export class AdminSidebarComponent implements OnInit {

	showSidebar = true;

	constructor(private _adminLayoutService: AdminLayoutService) {
		this._adminLayoutService.getToggleSidebar().subscribe(show => {
			this.showSidebar = show
		});
	}

	ngOnInit() {
	}
}