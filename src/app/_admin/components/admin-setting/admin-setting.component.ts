import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from '../../../_services';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.sass']
})
export class AdminSettingComponent implements OnInit {

	showSetting = true;

	constructor(private _adminLayoutService: AdminLayoutService) {
		this._adminLayoutService.getToggleSetting().subscribe(show => {
			this.showSetting = show
		});
	}

	ngOnInit() {
	}
}