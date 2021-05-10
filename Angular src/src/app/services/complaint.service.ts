import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  managerUrl: string = "http://localhost:9090/manager/complaintId"
  constructor(private http: HttpClient) { }

  getRegistedComplaint(compId:number):Observable<any>{
    return this.http.get(`${this.managerUrl}/${compId}`)

  }
}
