import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Import Layout
import {
  AdminLayoutComponent,
  AdminNavbarComponent,
  AdminBreadcrumbComponent,
} from './components';

// Admin Routing
import { AdminRoutingModule } from './admin.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
  	AdminLayoutComponent,
  	AdminNavbarComponent,
  	AdminBreadcrumbComponent,
  	DashboardComponent
  ]
})
export class AdminModule { }
