import { Component, OnInit } from '@angular/core';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-close-shipment',
  templateUrl: './close-shipment.component.html',
  styleUrls: ['./close-shipment.component.css']
})
export class CloseShipmentComponent implements OnInit {

  constructor(private service: CourierService) { }

  ngOnInit() {
  }

  successMessage: string = null;
  errorMessage: string = null;

  close(val) {
    console.log(val.courierId);
    this.service.closeCourier(val.courierId).subscribe(
      (message) => {
        console.log(message);
        this.successMessage = message;
      },
      (failure) => {
        //console.log(message);
        this.errorMessage = 'Cannot find courier';
        this.successMessage = null;
      }
    );
  }

}
