import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from '../../../_services';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.sass']
})
export class AdminNavbarComponent implements OnInit {

	showSidebar: boolean;
	showSetting: boolean;

	constructor(private _adminLayoutService: AdminLayoutService) {
		this.showSidebar = true;
		this.showSetting = false;
	}

	ngOnInit() {
	}

	toggleSidebar() {
		this.showSidebar = !this.showSidebar
		this._adminLayoutService.setToggleSidebar(this.showSidebar)
	}

	toggleSetting() {
		this.showSetting = !this.showSetting
		this._adminLayoutService.setToggleSetting(this.showSetting)
	}
}