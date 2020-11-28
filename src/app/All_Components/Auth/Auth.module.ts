// * NPM Imports
import { NgModule } from '@angular/core';

// * Local Imports

// 1.Module Imports
import { AuthRoutingModule } from './Auth-routing.module';

// 2. Components Imports
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,

  ],
  imports: [
    AuthRoutingModule
  ],
})
export class AuthModule { }
