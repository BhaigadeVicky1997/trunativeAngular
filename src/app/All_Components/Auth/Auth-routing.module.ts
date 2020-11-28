//NPM Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//* Local Imports

//Import Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
