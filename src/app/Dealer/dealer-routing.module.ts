import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelRegistrationComponent } from './Components/del-registration/del-registration.component';
import { StockImportComponent } from './Components/stock-import/stock-import.component';


const routes: Routes = [
  {
    path: '',
    component: DelRegistrationComponent
  },
  {
    path: 'delregistration',
    component: DelRegistrationComponent
  },
  {
    path: 'stockImport',
    component: StockImportComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
