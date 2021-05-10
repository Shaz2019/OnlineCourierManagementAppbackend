import { Component, OnInit } from '@angular/core';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-rejectshipment',
  templateUrl: './rejectshipment.component.html',
  styleUrls: ['./rejectshipment.component.css']
})
export class RejectshipmentComponent implements OnInit {

  constructor(private service: CourierService) { }

  ngOnInit() {
  }


  successMessage: any = null;
  errorMessage: string = null;

  reject(val) {
    console.log(val.coureirId)
    this.service.rejectCourier(val.courierId).subscribe(
      (message) => {
        this.successMessage = message;
      },
      (failure) => {
        this.errorMessage = 'courier not found';
      }
    )
  }

}
