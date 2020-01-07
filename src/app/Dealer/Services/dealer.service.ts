import { Injectable } from '@angular/core';
import { DelregistrationModel } from '../Models/dealer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockImport } from '../Models/stockImport.model';

type AOA = any[][];

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  path: string;


  constructor(private httpClient: HttpClient) {
    this.path = 'http://localhost:56984/api/home';
   }

  SaveDealerRegistration(delRegistrationModel: DelregistrationModel): Observable<DelregistrationModel>{
    return this.httpClient.post<DelregistrationModel>(this.path + '/saveDealerRegistration', delRegistrationModel);
  }

  SaveStockData(stockData: AOA): Observable<AOA>{
    return this.httpClient.post<AOA>('', stockData);
  }

}
