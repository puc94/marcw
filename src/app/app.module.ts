import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Select2Module } from 'ng2-select2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AuthGuard } from './_guards';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { ParentsTodoPipe } from './parents-todo.pipe';
import { DataService, UserService, AlertService, AuthenticationService } from './_services';
import { AppComponent } from './app.component';
import { TaskComponent, TaskCreateComponent, TaskEditComponent } from './_pages';
import { LoginComponent, RegisterComponent } from './_auth';
import { AlertComponent } from './_directives';

const appRoutes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'tasks', component: TaskComponent, canActivate: [AuthGuard] },
  { path: 'task-create', component: TaskCreateComponent, canActivate: [AuthGuard] },
  { path: 'task-edit/:id', component: TaskEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentsTodoPipe,
    TaskComponent,
    TaskCreateComponent,
    TaskEditComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Select2Module,
    HttpClientModule,
    NgxChartsModule,
    NgxGraphModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    DataService,
    UserService,
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
