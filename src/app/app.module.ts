// * NPM Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// * Local Imports

// 1.Module Imports
import { AppRoutingModule } from './app-routing.module';
import { PaymentModule } from './All_Components/PaymentRelatedComponent/payment.module';
import { AuthModule } from './All_Components/Auth/Auth.module';

// 2. Components Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './All_Components/CommonComponents/header/header.component';
import {FooterComponent} from '../app/All_Components/CommonComponents/footer/footer.component';
import { HomeComponent } from './All_Components/homeComponent/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PaymentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
