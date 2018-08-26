import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Layout
import { LayoutComponent } from './layout/layout.component';

// Admin Routing
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  	LayoutComponent
  ]
})
export class AdminModule { }
