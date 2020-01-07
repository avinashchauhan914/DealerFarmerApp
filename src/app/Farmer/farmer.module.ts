import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrmRegistrationComponent } from './Components/frm-registration/frm-registration.component';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerService } from './Services/farmer.service';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    FrmRegistrationComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FormsModule,
    DropdownModule
  ],
  providers: [
    FarmerService
  ],
  exports: [
    FrmRegistrationComponent,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }
