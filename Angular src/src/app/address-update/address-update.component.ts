import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service: CustomerService) { }

  ngOnInit() {
  }

  updateAdd(empForm) {
    this.service.updateAddress(empForm.value.customerId, empForm.value.houseNo,
      empForm.value.city, empForm.value.state, empForm.value.country, empForm.value.zip, empForm.value.street).subscribe(
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
