import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './Services/common.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './Components/registration/registration.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaymentMasterComponent } from './Payment/payment-master/payment-master.component';
import { PaymentDetailsComponent } from './Payment/payment-details/payment-details.component';
import { PaymentDetailsListComponent } from './Payment/payment-details-list/payment-details-list.component';
import { PaymentService } from './Services/payment.service';
import { FarmerModule } from './Farmer/farmer.module';
import { DealerModule } from './Dealer/dealer.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PaymentMasterComponent,
    PaymentDetailsComponent,
    PaymentDetailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    FarmerModule,
    DealerModule
  ],
  providers: [
    CommonService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
