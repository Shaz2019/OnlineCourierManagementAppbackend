import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courier } from 'src/model/courier';
import { CourierStatus } from 'src/model/courierstatus';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-courier-status',
  templateUrl: './courier-status.component.html',
  styleUrls: ['./courier-status.component.css']
})
export class CourierStatusComponent implements OnInit {
  constructor(private service: CourierService,
    private route: ActivatedRoute,
    private router: Router) { }

  validationMessages: string[] = null;
  successMessage: string = null;


  ngOnInit(): void {

  }

  check: boolean = false;
  create: boolean = false;
  courier: Courier;
  message: string = null;
  errorMessage: string = null;
  id: number = null;
  status: CourierStatus;

  delete(Id: number): void {
    console.log(Id);
    this.id = Id;
    this.service.deleteCourier(Id).subscribe(
      (response) => {
        this.message = response;
        this.check = false;
      },
      (error) => console.log(error)
    );


  }

  get(courierForm) {
    console.log(courierForm.value.courierId);
    this.service.getShipment(courierForm.value.courierId).subscribe(
      (data) => {
        this.courier = data;
        this.check = true;
        this.errorMessage = null;
      },
      (failure) => {
        this.check=false;
        this.errorMessage = "Courier Not Found";
      }
    )
  }


}
