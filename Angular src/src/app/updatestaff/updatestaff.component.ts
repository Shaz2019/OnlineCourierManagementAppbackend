import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-updatestaff',
  templateUrl: './updatestaff.component.html',
  styleUrls: ['./updatestaff.component.css']
})
export class UpdatestaffComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service:ManagerService) { }

  ngOnInit() {
    
  }

  update(empForm){
    console.log(empForm.value);
    console.log(empForm.value.empId);
    console.log(empForm.value.mgrId);
    console.log(empForm.value.officeId);
    this.service.updateEmployee(empForm.value.empId,empForm.value.mgrId,empForm.value.officeId).subscribe(
      (message) => {
        this.successMessage="Added successfully";
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
