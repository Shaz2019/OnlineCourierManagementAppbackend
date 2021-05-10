import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/model/complain';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-check-complaint',
  templateUrl: './check-complaint.component.html',
  styleUrls: ['./check-complaint.component.css']
})
export class CheckComplaintComponent implements OnInit {

  check:boolean=false;
  errorMessage: string =null;
  message: string = null;
  validationMessages:string[]=null;
  com:Complaint;
  constructor(private service:ComplaintService) { }

  ngOnInit() {
  }

  show(compForm){
    console.log(compForm.value.compId)
    this.service.getRegistedComplaint(compForm.value.compId).subscribe(
      (data) => {
        this.com=data;
        console.log(data);
        this.check=true;
        this.errorMessage=null;
      },
      (failure) => {
        this.errorMessage ="Not Found";
      }
    )

  }

}
