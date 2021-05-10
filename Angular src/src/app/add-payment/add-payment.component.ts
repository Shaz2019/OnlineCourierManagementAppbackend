import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
 
  constructor(private service: CustomerService) { }
 
  ngOnInit() {
  }
 
  addNewPayment(pForm) {
    this.service.addPayment(pForm.value.courierId, pForm.value.paymentMode).subscribe(
        (message) => {
          this.successMessage = "Updated successfully";
          this.validationMessages = null;
          this.errorMessage = null;
        },
        (failure) => {
          this.successMessage = null;
          this.validationMessages = JSON.parse(failure.error).errors;
          this.errorMessage = JSON.parse(failure.error).error;
        }
      )
 
  }
}
