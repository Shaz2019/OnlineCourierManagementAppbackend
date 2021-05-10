import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/model/staff';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  managerUrl: string = "http://localhost:9090/manager"
  
  constructor(private http: HttpClient) { }

  getStaff(eid:number):Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.managerUrl}/${eid}`,{ headers })
  }

  updateEmployee(staffId:number,mgrId:number,officeId:number):Observable<any>{
    const token = localStorage.getItem('token')
    console.log('token while sending',token)
    const headers = new HttpHeaders({ Authorization:localStorage.getItem('token') });
    return this.http.patch(`${this.managerUrl}/${staffId}/${mgrId}/${officeId}`,{},{ headers, responseType: 'text' });
  }

  getAllRegisteredComplaints():Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.managerUrl,{ headers })
  }

  addEmployee(newEmp:Staff):Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.managerUrl, newEmp,{ headers, responseType: 'text' })
  }

  deleteEmployee(eid:number):Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.managerUrl}/${eid}`,{ headers, responseType: 'text' })
  }

  updateAddress(staffId:number,houseNo:string,city:string,state:string,country:string,zip:number,street:string){
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.patch(`${this.managerUrl}/${staffId}/${houseNo}/${city}/${state}/${country}/${zip}/${street}`,{},{ headers, responseType: 'text' })
  }
}
