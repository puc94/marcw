import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { TaskComponent, TaskCreateComponent, TaskEditComponent } from './task-components';
import { ParentsTodoPipe } from '../filters';

// Admin Routing
import { TaskRoutingModule } from './task.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    Select2Module,
    NgxChartsModule,
    NgxGraphModule,
    TaskRoutingModule
  ],
  declarations: [
  	TaskComponent,
  	TaskCreateComponent,
  	TaskEditComponent,
  	ParentsTodoPipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TaskModule { }
