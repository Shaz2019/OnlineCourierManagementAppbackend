import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer = null;

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let customerId: number = +params.get('customerId');

        this.service.getCustomer(customerId).subscribe(
          (data) => {

            this.customer = data
          },
          (fail) => {
            this.errorMessage = fail.error.errorMessage;
          }
        )
      }
    )
  }

  updated(customer: Customer) {

    this.service.updateCustomer(customer.customerId, customer.aadharNo, customer.firstName, customer.lastName, customer.mobileNo).subscribe(
      (message) => {
        this.successMessage = message
        this.validationMessages = null
        this.errorMessage = null
      },
      (failure) => {
        this.successMessage = null;
        this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = JSON.parse(failure.error).errorMessage;
      }

    )

  }


  goBack() {
    this.router.navigate(["custList"]);
  }

}
