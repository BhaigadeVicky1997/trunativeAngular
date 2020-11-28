// * NPM Imports
import { NgModule } from '@angular/core';

// * Local Imports

// 1.Module Imports
import { PaymentRoutingModule } from './payment-routing.module';

// 2. Components Imports
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
    declarations: [
        CartComponent,
        PaymentComponent

    ],
    imports: [
        PaymentRoutingModule
    ],
})
export class PaymentModule { }
