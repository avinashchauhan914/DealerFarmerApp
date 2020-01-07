import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrmRegistrationComponent } from './Components/frm-registration/frm-registration.component';

const routes: Routes = [
  {
    path: '',
    component: FrmRegistrationComponent
  },
  {
    path: 'frmRegistration',
    component: FrmRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
