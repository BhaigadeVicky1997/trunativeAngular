// * NPM Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// * Local Imports

// 1.Module Imports
import { AppRoutingModule } from './app-routing.module';
//import { PaymentModule } from './All_Components/PaymentRelatedComponent/payment.module';
//import { AuthModule } from './All_Components/Auth/Auth.module';

// 2. Components Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './All_Components/homeComponent/home/home.component';
import { LoginComponent } from './All_Components/Auth/login/login.component';
import { SignupComponent } from './All_Components/Auth/signup/signup.component';
import { CartComponent } from './All_Components/PaymentRelatedComponent/cart/cart.component';
import { PaymentComponent } from './All_Components/PaymentRelatedComponent/payment/payment.component';
import { HeaderComponent } from './All_Components/sharedComponents/header/header.component';
import { FooterComponent } from './All_Components/sharedComponents/footer/footer.component';
import { NotFoundComponent } from './All_Components/not-found/not-found.component';
import { BlogsComponent } from './All_Components/blogs/blogs.component';
import { BlogContentComponent } from './All_Components/Blogs/blog-content/blog-content.component';
import { AboutusComponent } from './All_Components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BlogsComponent,
    BlogContentComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
