import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/model/staff';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  validationMessages: string[] = null;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private service:ManagerService) { }

  ngOnInit() {
  }

  createNew(data:Staff){
    this.service.addEmployee(data).subscribe(
      (message) => {
        this.successMessage = message;
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
