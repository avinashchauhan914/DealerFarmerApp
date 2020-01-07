import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { DelregistrationModel } from '../../Models/dealer.model';
import { DealerService } from '../../Services/dealer.service';

@Component({
  selector: 'app-del-registration',
  templateUrl: './del-registration.component.html',
  styleUrls: ['./del-registration.component.css']
})
export class DelRegistrationComponent implements OnInit {
Mobile: number;
delRegistrationModel: DelregistrationModel;
registrationList: any[] = [];
  constructor(private commonService: CommonService, private dealerService: DealerService) { 
    this.delRegistrationModel = new DelregistrationModel();
  }

  ngOnInit() {
    this.getRegistrationList();
  }

  getRegistrationList(){
    this.commonService.GetRegistrationList().subscribe(
      data => this.registrationList = data
    );
  }

  saveDealerRegistration(){
    this.registrationList.forEach(element => {
      this.delRegistrationModel.RegisId = element.regisId;
    });
    this.dealerService.SaveDealerRegistration(this.delRegistrationModel).subscribe(
      res => {console.log("Successfull")},
      err => {console.log("Error")}
    );
  }

}
