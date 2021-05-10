import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courier } from 'src/model/courier';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-updatecourier',
  templateUrl: './updatecourier.component.html',
  styleUrls: ['./updatecourier.component.css']
})
export class UpdatecourierComponent implements OnInit {

  courier: Courier=null;

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;
  
  constructor(private service: CourierService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {

  }

  updated(val) {
    console.log(val.courierId);
    this.service.updateCourier(val.courierId, val.receiverId, val.senderId).subscribe(
      (message) => {
        this.successMessage=message
        this.validationMessages = null
        this.errorMessage = null
      },
      (failure) => {
        this.successMessage = null;
        this.validationMessages = JSON.parse(failure.error).errors;
        this.errorMessage = JSON.parse(failure.error).error;
      }

    )
  }


  goBack(){
    this.router.navigate(["courierlist"]);
  }

}
