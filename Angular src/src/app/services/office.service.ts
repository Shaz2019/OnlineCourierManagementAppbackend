import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CourierOfficeOutlet } from 'src/model/courierOfficeOutlet';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  baseUrl: string = "http://localhost:9090/CourierOfficeOutlet"

  constructor(private http: HttpClient) { }

  getAllOffices(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl,{headers});
  }

  getOffice(oid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${oid}`, { headers })
  }

  updateAddress(officeId:number,houseNo:string,city:string,state:string,country:string,zip:number,street:string){
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.patch(`${this.baseUrl}/${officeId}/${houseNo}/${city}/${state}/${country}/${zip}/${street}`,{},{ headers, responseType: 'text' })
  }

  removeOffice(oid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${oid}`, { headers, responseType: 'text' })
  }

  addOffice(newOffice: CourierOfficeOutlet): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.baseUrl, newOffice, { headers, responseType: 'text' });
  }

  checkOfficeStatus(oid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/status/${oid}`, { headers, responseType: 'text' })
  }

}
