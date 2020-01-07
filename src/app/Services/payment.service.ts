import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentModel } from '../Models/payment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  SavePaymentDetails(paymentDetails: PaymentModel): Observable<PaymentModel>{
    return this.httpClient.post<PaymentModel>('http://localhost:56984/api/PaymentDetail',paymentDetails);
  }
}
