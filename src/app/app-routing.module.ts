import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Route[]=[

//  { path:"", redirectTo:"login", pathMatch:'full' },
//  {path:"home", loadChildren:"app/home/home.module#HomeModule"}
 { path:"login", loadChildren:"app/login/login.module#LoginModule"},
 { path:"users", component: UsersComponent },
 { path:"user",  component:UserComponent },
 { path:"user/:id",  component:UserComponent },
 { path:"testing",  component:LoginComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
