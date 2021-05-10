import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-update-staff-add',
  templateUrl: './update-staff-add.component.html',
  styleUrls: ['./update-staff-add.component.css']
})
export class UpdateStaffAddComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service:ManagerService) { }

  ngOnInit() {
  }

  updateAdd(empForm){
    console.log(empForm.value.empId)
    console.log(empForm.value.houseNo)
    console.log(empForm.value.city)
    console.log(empForm.value.state)
    console.log(empForm.value.country)
    console.log(empForm.value.zip)
    console.log(empForm.value.street)
    this.service.updateAddress(empForm.value.empId,empForm.value.houseNo,
      empForm.value.city,empForm.value.state,empForm.value.country,empForm.value.zip,empForm.value.street).subscribe(
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
