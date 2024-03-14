import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const USER_ROUTES: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent,  canActivate: [] },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(USER_ROUTES) ], 
   exports:[RouterModule]
})
export class UserRoutingModule { }
