import { Injectable } from '@angular/core';
import { RegistrationModel, CityModel, StateModel, UserType } from '../Models/common.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  path: string;
  Mobile = new Subject<number>();

  constructor(private httpClient: HttpClient) { 
    this.path = 'http://localhost:56984/api/home';
  }

  SaveRegistration(registrationResponseData: RegistrationModel): Observable<RegistrationModel>{
    return this.httpClient.post<RegistrationModel>(this.path + '/saveRegistration',registrationResponseData);
  }

  GetCityList(): Observable<CityModel[]>{
    return this.httpClient.get<CityModel[]>(this.path + '/getCityList');
  }
  
  GetStateList(): Observable<StateModel[]>{
    return this.httpClient.get<StateModel[]>(this.path + '/getStateList');
  }

  GetUserTypeList(): Observable<UserType[]>{
    return this.httpClient.get<UserType[]>(this.path + '/getUserTypeList');
  }

  GetRegistrationList(): Observable<RegistrationModel[]>{
    return this.httpClient.get<RegistrationModel[]>(this.path + '/getRegistrationList');
  }


}
