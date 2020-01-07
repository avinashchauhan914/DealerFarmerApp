import { Injectable } from '@angular/core';
import { FrmRegistration, MeasurementData } from '../Models/farmer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
path: string;
  constructor(private httpClient: HttpClient) { 
    this.path = 'http://localhost:56984/api/home';
  }

  saveFrmregistration(frmRegistration: FrmRegistration): Observable<FrmRegistration>{
    return this.httpClient.post<FrmRegistration>(this.path + '/saveFrmRegistration', frmRegistration);
  }

  GetMeasurementData(): Observable<MeasurementData[]>{
    return this.httpClient.get<MeasurementData[]>(this.path + '/getMeasurementData');
  }

}
