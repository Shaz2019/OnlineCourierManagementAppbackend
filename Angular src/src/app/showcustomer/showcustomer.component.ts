import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {

  
  constructor(private service: CustomerService) { }

  ngOnInit(): void {
  }
  header: string = "Customer details";
  check: boolean = false;
  customer: Customer;
  message: string = null;
  errorMessage: string = null;
  delete(customerId: number): void {
    this.service.deleteCustomer(customerId).subscribe(
      (response) => {
        this.message = response;
        this.check = false;
      },
      (error) => console.log(error)
    );

  }

  show(officeForm) {

    this.service.getCustomer(officeForm.value.customerId).subscribe(
      (data) => {
        this.check = true;
        this.customer = data;

        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }


}
