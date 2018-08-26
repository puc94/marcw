import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Auth Routing
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
  	LoginComponent,
  	RegisterComponent
  ]
})
export class AuthModule { }
