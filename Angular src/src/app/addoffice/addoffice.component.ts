import { Component, OnInit } from '@angular/core';
import { CourierOfficeOutlet } from 'src/model/courierOfficeOutlet';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-addoffice',
  templateUrl: './addoffice.component.html',
  styleUrls: ['./addoffice.component.css']
})
export class AddofficeComponent implements OnInit {

  validationMessages: string[]= null;
  errorMessage: string= null;
  successMessage: string= null;

  timePattern: string= '^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$';

  constructor(private service: OfficeService) { }

  ngOnInit() {
  }

  createNew(data: CourierOfficeOutlet){

    this.service.addOffice(data).subscribe(
      (message)=> {
        this.successMessage= message;
        this.validationMessages= null;
        this.errorMessage= null;
      },
      (failure)=> {
        this.successMessage= null;
        this.validationMessages= JSON.parse(failure.error).errors;
        this.errorMessage= JSON.parse(failure.error).errorMessage;
      }
    )
  }
}
