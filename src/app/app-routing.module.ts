import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { PaymentMasterComponent } from './Payment/payment-master/payment-master.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'payment',
    component: PaymentMasterComponent
  },
  {
    path: 'farmer',
    loadChildren: './Farmer/farmer.module#FarmerModule'
  },
  {
    path: 'dealer',
    loadChildren: './Dealer/dealer.module#DealerModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
