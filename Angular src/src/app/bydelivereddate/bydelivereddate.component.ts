import { Component, OnInit } from '@angular/core';
import { Courier } from 'src/model/courier';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-bydelivereddate',
  templateUrl: './bydelivereddate.component.html',
  styleUrls: ['./bydelivereddate.component.css']
})
export class BydelivereddateComponent implements OnInit {
  constructor(private service: CourierService) { }

  ngOnInit() {

  }

  errorMessage: string = null;
  successMessage: string = null;
  create: boolean = false;
  couriers: Courier[];
  date: string;

  getByDeliveredDate(val) {
    console.log(val.deliveredDate);
    this.service.getShipmentByDeliveredDate(<string>val.deliveredDate).subscribe(
      (data) => {
        console.log(data)
        this.couriers = data;
        this.date = val.deliveredDate;
        this.create = true;
        this.errorMessage = null;
      },
      (failure) => {
        this.create = false;
        this.errorMessage = "No Courier Found";
      }

    )
  }

}
