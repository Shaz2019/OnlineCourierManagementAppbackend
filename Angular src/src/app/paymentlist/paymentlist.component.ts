import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/model/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  constructor(private service: PaymentService) { }

  ngOnInit() {
    this.loadData();
  }

  payments: Payment[];
  message: string = null;
  errorMessage: string;

  loadData(): void {
    this.service.getAllPaymentDetails().subscribe(
      (data) =>{
        this.payments = data;
        this.errorMessage = null;
      },
      (failResponse)=>{
        console.log(failResponse);
        this.errorMessage = failResponse.error.details;
      }
    )
  }

}
