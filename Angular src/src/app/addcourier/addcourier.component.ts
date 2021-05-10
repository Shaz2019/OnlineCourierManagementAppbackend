import { Component, OnInit } from '@angular/core';
import { Courier } from 'src/model/courier';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-addcourier',
  templateUrl: './addcourier.component.html',
  styleUrls: ['./addcourier.component.css']
})
export class AddcourierComponent implements OnInit {
  constructor(private service: CourierService) { }

  ngOnInit() {
  }

  successMessage: string = null;
  validationMessages: string[] = null;
  errorMessage: string = null;

  addCourier(data: Courier) {
    console.log(data);
    this.service.addCourier(data).subscribe(
      (message) => {
        this.successMessage = message;
        this.validationMessages = null;
        this.errorMessage = null;
      },
      (failure) => {
        this.successMessage = null;
        //this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = "Unable to ADD Courier / Consignment Id";
      }

    )
  }

}
