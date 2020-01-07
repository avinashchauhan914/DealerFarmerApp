import { Component, OnInit } from '@angular/core';
import { RegistrationModel, CityModel, StateModel, UserType } from 'src/app/Models/common.model';
import { CommonService } from 'src/app/Services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationResponseData: RegistrationModel;
  userTypeData: UserType[];
  userType: UserType;
  stateData: StateModel[];
  state: StateModel;
  cityData: CityModel[] = [];
  cityAccordingState: CityModel[] = [];
  city: CityModel;
  Mobile: number;
  ZipCode: number;
  constructor( private commonService: CommonService, private router: Router) { 
    this.registrationResponseData = new RegistrationModel();
    this.state = new StateModel();
    this.city = new CityModel();
  }

  ngOnInit() {
    this.getCityList();
    this.getStateList();
    this.getUserTypeList();
  }

// Registeration save method for all 
  saveRegistration(){
    this.registrationResponseData.StateId = this.state.stateId;
    this.registrationResponseData.CityId = this.city.cityId;
    this.registrationResponseData.userTypeId = this.userType.userTypeId;
    this.registrationResponseData.Mobile = +this.Mobile;
    this.registrationResponseData.ZipCode = +this.ZipCode;

    this.commonService.SaveRegistration(this.registrationResponseData).subscribe(
      res => {console.log("Registration Sucessfull")},
      err => {console.log("error")}
    );

    if(this.userType.userTypeId === 'frm001'){
      this.router.navigate(['/farmer/frmRegistration']);
    }
    else if(this.userType.userTypeId === 'del001'){
      this.router.navigate(['/dealer/delregistration']);
    }
  }

  // Fetch all the list of city 
  getCityList(){
     this.commonService.GetCityList().subscribe(
       (data) => { this.cityData = data}
     )
  }

  // Fetch all the list of state 
  getStateList(){
    this.commonService.GetStateList().subscribe(
      data => { this.stateData = data }
    );
  }

  // Fetch all the list of User Type like - farmer, dealer etc.
  getUserTypeList(){
    this.commonService.GetUserTypeList().subscribe(
      data => { this.userTypeData = data }
    )
  }

  // select city according the state choosen by endUser
  selectCityAccordingState(event){
    var value = event.stateId;
    console.log(value);
    this.cityData.forEach(element => {
      if(element.stateId === value){
        this.cityAccordingState = this.cityData;
      }else{
        this.cityAccordingState = [];
      }
    });
  }

}
