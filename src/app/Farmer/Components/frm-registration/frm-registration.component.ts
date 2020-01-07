import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FrmRegistration, MeasurementData } from '../../Models/farmer.model';
import { FarmerService } from '../../Services/farmer.service';
import { RegistrationModel } from 'src/app/Models/common.model';

@Component({
  selector: 'app-frm-registration',
  templateUrl: './frm-registration.component.html',
  styleUrls: ['./frm-registration.component.css']
})
export class FrmRegistrationComponent implements OnInit {
Mobile: number;
frmRegistration: FrmRegistration;
measureValue: MeasurementData;
measureData: MeasurementData[];
registrationList: any[];
Area: number;
  constructor(private commonService: CommonService, private farmerService: FarmerService) { 
    this.frmRegistration = new FrmRegistration();
  }

  ngOnInit() {
    this.getRegistrationList();
    this.getMeasurementData();
  }

  getRegistrationList(){
    this.commonService.GetRegistrationList().subscribe(
      data => this.registrationList = data
    );
    console.log(this.registrationList);
  }

  getMeasurementData(){
    this.farmerService.GetMeasurementData().subscribe(
      data => this.measureData = data
    );
  } 

  saveFrmregistration(){
    this.registrationList.forEach(element => {
      this.frmRegistration.RegisId = element.regisId;
    });
    this.frmRegistration.Area = +this.Area;
    this.frmRegistration.MeasureId = +this.measureValue.measureId;

    this.farmerService.saveFrmregistration(this.frmRegistration).subscribe(
      res => {console.log("Successfully")},
      err => {console.log("Error")}
    );
  }

}
