import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const appRoutes : Route[]=[
 { path:"", redirectTo:"users", pathMatch:'full' },
 { path:"users", component: UsersComponent },
 { path:"user",  component:UserComponent },
 { path:"user/:id",  component:UserComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
