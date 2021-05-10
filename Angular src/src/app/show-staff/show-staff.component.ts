import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/model/staff';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-show-staff',
  templateUrl: './show-staff.component.html',
  styleUrls: ['./show-staff.component.css']
})
export class ShowStaffComponent implements OnInit {
  
  check:boolean=false;
  errorMessage: string = null;
  message: string = null;
  validationMessages:string[]=null;
  emp:Staff;

  constructor(private service:ManagerService) { }

  ngOnInit() {
    
  }

  show(empForm){
    console.log(empForm.value);
    this.service.getStaff(empForm.value.empId).subscribe(
      (data) => {
        this.emp=data;
        console.log(this.emp);
        this.check=true;
        this.errorMessage=null;
      },
      (failure) => {
        this.errorMessage ="Not Found";
      }
      )
 
    }

    
      delete(empid: number):void {
       this.service.deleteEmployee(empid).subscribe(
          (response) => {
            this.message = response;
            this.check=false;
          },
          (error) => console.log(error)
        );
    
    }
  
}
