import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { UsersComponent } from './users/users.component';
// import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
// import { LoginComponent } from './login/login.component';
// import { ChildComponentComponent } from './child-component/child-component.component'


@NgModule({
  declarations: [
    AppComponent
    // UsersComponent,
    // UserComponent,
    // LoginComponent,
    // ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
