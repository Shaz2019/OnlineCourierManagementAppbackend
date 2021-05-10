import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courier } from 'src/model/courier';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  baseUrl: string = "http://localhost:9090/shipments"

  constructor(private http: HttpClient) { }

  getAllCouriers(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl);
  }

  getShipment(shipmentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${shipmentId}`);
  }

  closeCourier(courierId: number): Observable<any> {
    //const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.put(`${this.baseUrl}/closingShipment/${courierId}`, { responseType: 'text' });
  }

  deleteCourier(shipmentId: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    //include responseType in options because response by default is JSON
    let r = confirm("Are you sure you want to delete ?");
    if (r == true)
      return this.http.delete(`${this.baseUrl}/${shipmentId}`, { responseType: 'text' })  // this.baseUrl+"/"+eid
    else
      return null;
  }

  updateCourier(courierId: number, receiverId: number, senderId: number): Observable<any>{
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.patch(`${this.baseUrl}/${courierId}/${receiverId}/${senderId}`,{}, {responseType: "text"});
  }

  addCourier(courier: Courier): Observable<any> {
    return this.http.post(this.baseUrl, courier, { responseType: 'text' });
  }

  rejectCourier(courierId: number){
    return this.http.put(`${this.baseUrl}/rejectingShipment/${courierId}`, {responseType: 'text'});
  }

  getShipmentByDeliveredDate(date: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/GetAllByDeliveredDate/${date}`);
  }
}
