import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelRegistrationComponent } from './Components/del-registration/del-registration.component';
import { FormsModule } from '@angular/forms';
import { DealerRoutingModule } from './dealer-routing.module';
import { DealerService } from './Services/dealer.service';
import { StockImportComponent } from './Components/stock-import/stock-import.component';



@NgModule({
  declarations: [
    DelRegistrationComponent,
    StockImportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DealerRoutingModule
  ],
  providers: [
    DealerService
  ],
  exports: [
    DelRegistrationComponent,
    DealerRoutingModule
  ]
})
export class DealerModule { }
