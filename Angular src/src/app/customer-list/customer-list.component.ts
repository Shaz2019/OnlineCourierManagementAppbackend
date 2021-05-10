import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/model/customer';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.loadData();
  }
  header: string = "List of Customers";

  customers: Customer[];
  message: string = null;
  errorMessage: string = null;

  delete(customerId: number): void {
    this.service.deleteCustomer(customerId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getCustomers().subscribe(
      (data) => {
        this.customers = data;

        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }

}
