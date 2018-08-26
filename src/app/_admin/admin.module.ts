import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Layout
import {
  AdminLayoutComponent,
  AdminNavbarComponent,
  AdminSidebarComponent,
  AdminBreadcrumbComponent,
  AdminSettingComponent
} from './components';

// Admin Routing
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  	AdminLayoutComponent,
  	AdminNavbarComponent,
  	AdminSidebarComponent,
  	AdminBreadcrumbComponent,
  	AdminSettingComponent
  ]
})
export class AdminModule { }
