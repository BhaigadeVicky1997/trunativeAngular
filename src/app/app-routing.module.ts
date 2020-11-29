import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './All_Components/aboutus/aboutus.component';
import { LoginComponent } from './All_Components/Auth/login/login.component';
import { SignupComponent } from './All_Components/Auth/signup/signup.component';
import { BlogContentComponent } from './All_Components/Blogs/blog-content/blog-content.component';
import { BlogsComponent } from './All_Components/blogs/blogs.component';
import { HomeComponent } from './All_Components/homeComponent/home/home.component';
import { NotFoundComponent } from './All_Components/not-found/not-found.component';
import { CartComponent } from './All_Components/PaymentRelatedComponent/cart/cart.component';
import { PaymentComponent } from './All_Components/PaymentRelatedComponent/payment/payment.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:LoginComponent},
  
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'blogcontent',component:BlogContentComponent},
  {path:'aboutus',component:AboutusComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
     {
      scrollPositionRestoration: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
