import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-updateoffice',
  templateUrl: './updateoffice.component.html',
  styleUrls: ['./updateoffice.component.css']
})
export class UpdateofficeComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service: OfficeService) { }

  ngOnInit() {
  }

  updateAdd(officeForm){
    console.log(officeForm.value.officeId)
    console.log(officeForm.value.houseNo)
    console.log(officeForm.value.city)
    console.log(officeForm.value.state)
    console.log(officeForm.value.country)
    console.log(officeForm.value.zip)
    console.log(officeForm.value.street)
    this.service.updateAddress(officeForm.value.officeId,officeForm.value.houseNo,
      officeForm.value.city,officeForm.value.state,officeForm.value.country,officeForm.value.zip,officeForm.value.street).subscribe(
        (message) => {
          this.successMessage="Updated successfully";
          this.validationMessages = null;
          this.errorMessage = null;
        },
        (failure) => {
          this.successMessage = null;
          this.validationMessages = JSON.parse(failure.error).errors;
          this.errorMessage =JSON.parse(failure.error).error;
        }
  
      )
  
  

  }

}
