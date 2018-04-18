import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRouterModule } from './login-router.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRouterModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
