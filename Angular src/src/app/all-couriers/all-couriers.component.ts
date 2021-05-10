import { Component, OnInit } from '@angular/core';
import { Courier } from 'src/model/courier';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-all-couriers',
  templateUrl: './all-couriers.component.html',
  styleUrls: ['./all-couriers.component.css']
})
export class AllCouriersComponent implements OnInit {
  constructor(private service: CourierService) { }

  ngOnInit(): void {
    this.loadData();
  }

  header: string = "List of Couriers";

  couriers: Courier[];
  message: string = null;
  errorMessage: string = null;

  delete(courierId: number): void {
    this.service.deleteCourier(courierId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
      },
      (error) => console.log(error)
    );

  }

  loadData(): void {

    this.service.getAllCouriers().subscribe(
      (data) => {
        console.log(data);
        this.couriers = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }

}
