import { Component, OnInit } from '@angular/core';
import { CourierOfficeOutlet } from 'src/model/courierOfficeOutlet';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-showoffice',
  templateUrl: './showoffice.component.html',
  styleUrls: ['./showoffice.component.css']
})
export class ShowofficeComponent implements OnInit {

  check: boolean= false;
  errorMessage: string= null;
  message: string= null;
  validationMessages: string[]= null;
  office: CourierOfficeOutlet;

  constructor(private service: OfficeService) { }

  ngOnInit() {
  }

  show(officeForm){
    console.log(officeForm.value);
    this.service.getOffice(officeForm.value.officeId).subscribe(
      (data)=> {
        this.office= data;
        console.log(this.office);
        this.check= true;
        this.errorMessage= null;
      },
      (failure)=> { 
        this.errorMessage= 'Office Not Found'; 
      }
    )
  }

  delete(officeid: number): void{

    this.service.removeOffice(officeid).subscribe(
      (response)=> {
        this.message= response;
        this.check= false;
      },
      (failure)=>{
        this.errorMessage= "Can't delete, Employees exist in the Office";
      }
    );
  }

  checkStatus(officeid: number): boolean {
    
    this.service.checkOfficeStatus(officeid).subscribe(
      (data)=> {
        this.message= JSON.stringify(data);
        console.log(this.office);
        this.check= true;
        this.errorMessage= null;
      },
      (failure)=> {
        this.message= null;
        this.errorMessage =JSON.parse(failure.error).error;
        this.check=false;
      }
    );
    return this.check;
  }

}
