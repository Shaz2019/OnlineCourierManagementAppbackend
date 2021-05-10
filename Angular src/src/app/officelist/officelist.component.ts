import { Component, OnInit } from '@angular/core';
import { CourierOfficeOutlet } from 'src/model/courierOfficeOutlet';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-officelist',
  templateUrl: './officelist.component.html',
  styleUrls: ['./officelist.component.css']
})
export class OfficelistComponent implements OnInit {

 
  constructor(private service: OfficeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  header: string= "List of Courier Offices";

  offices: CourierOfficeOutlet[];
  message: string= null;
  errorMessage: string= null;

  remove(officeId: number): void{

    this.service.removeOffice(officeId).subscribe(
      (response)=> {
        this.message= response;
        this.loadData();
      },
      (failure)=>{
        this.errorMessage= "Can't delete, Employees exist in the Office";
      }
    );
  }

  loadData(): void{

    this.service.getAllOffices().subscribe(
      (data)=> {
        this.offices= data;
        this.errorMessage= null;
      },
      (failResponse)=> {
        this.errorMessage= failResponse.error.errorMessage;
      }
    );
  }

}
