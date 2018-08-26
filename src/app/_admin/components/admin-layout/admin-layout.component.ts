import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from '../../../_services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.sass']
})
export class AdminLayoutComponent implements OnInit {

	showSidebar: boolean
	showSetting: boolean

	constructor(private _adminLayoutService: AdminLayoutService) {
		this.showSidebar = true
		this.showSetting = false
		this._adminLayoutService.getToggleSidebar().subscribe(show => {
			this.showSidebar = show
		});
		this._adminLayoutService.getToggleSetting().subscribe(show => {
			this.showSetting = show
		});
	}

	ngOnInit() {
	}

}
