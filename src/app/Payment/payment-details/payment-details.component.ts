import { Component, OnInit } from '@angular/core';
import { PaymentModel } from 'src/app/Models/payment.model';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  paymentDetails: PaymentModel;
  constructor(private paymentService: PaymentService) { 
    this.paymentDetails = new PaymentModel();
  }

  ngOnInit() {
  }
savePayment(){
  this.paymentService.SavePaymentDetails(this.paymentDetails).subscribe(
    res => {console.log("Successfull")},
    err => {console.log("Error")}
  );
}
}
