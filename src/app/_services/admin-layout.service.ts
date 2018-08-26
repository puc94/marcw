import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

	private sidebarSubject = new Subject<any>();
	private settingSubject = new Subject<any>();

	constructor() { }

	setToggleSidebar(show) {
		this.sidebarSubject.next(show)
	}

	setToggleSetting(show) {
		this.settingSubject.next(show)
	}

	getToggleSidebar(): Observable<any> {
		return this.sidebarSubject.asObservable();
	}

	getToggleSetting(): Observable<any> {
		return this.settingSubject.asObservable();
	}
}
