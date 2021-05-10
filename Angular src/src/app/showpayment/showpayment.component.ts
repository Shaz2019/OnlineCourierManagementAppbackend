import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/model/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-showpayment',
  templateUrl: './showpayment.component.html',
  styleUrls: ['./showpayment.component.css']
})
export class ShowpaymentComponent implements OnInit {

  check:boolean=false;
  errorMessage: string =null;
  message: string = null;
  validationMessages:string[]=null;
  pay: Payment;

  constructor(private service:PaymentService) { }

  ngOnInit() {
  }

  show(paymentForm){
    console.log(paymentForm.value);
    this.service.getPaymentDetailsById(paymentForm.value.paymentId).subscribe(
      (data) => {
        this.pay=data;
        console.log(this.pay);
        this.check=true;
        this.errorMessage=null;
      },
      (failure) => {
        this.errorMessage ="Not Found";
      }
    )
  }

}
