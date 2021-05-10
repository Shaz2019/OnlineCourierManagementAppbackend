import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/model/complain';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-allcomplaints',
  templateUrl: './allcomplaints.component.html',
  styleUrls: ['./allcomplaints.component.css']
})
export class AllcomplaintsComponent implements OnInit {

  complaints:Complaint[];
  message: string = null;
  errorMessage: string = null;
  constructor(private service:ManagerService) { }

  ngOnInit():void {
    this.loadData();
  }
  loadData(){
    this.service.getAllRegisteredComplaints().subscribe(
      (data) => {
        console.log(data)
        this.complaints = data;
        this.errorMessage = null;
      },
      (failResponse) => {
        this.errorMessage = failResponse.error.errorMessage;
      }
    )
  }


}
