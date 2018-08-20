import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Select2Module } from 'ng2-select2';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { ParentsTodoPipe } from './parents-todo.pipe';
import { TaskComponent } from './task/task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent },
  { path: 'task-create', component: TaskCreateComponent },
  { path: 'task-edit/:id', component: TaskEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentsTodoPipe,
    TaskComponent,
    TaskCreateComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
