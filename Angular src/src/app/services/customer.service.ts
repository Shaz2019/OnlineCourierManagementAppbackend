import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = "http://localhost:9090/customers"

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(this.baseUrl, { headers });
  }

  getCustomer(eid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${eid}`, { headers })
  }
  getCourier(eid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.get(`${this.baseUrl}/${eid}`, { headers })
  }

  updateCustomer(customerId: number, aadharNo: number, firstName: string, lastName: string, mobileNo: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.patch(`${this.baseUrl}/${customerId}/${aadharNo}/${firstName}/${lastName}/${mobileNo}`, {}, { headers, responseType: 'text' });
  }

  deleteCustomer(eid: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.delete(`${this.baseUrl}/${eid}`, { headers, responseType: 'text' })
  }

  addCustomer(newEmp: Customer): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.post(this.baseUrl, newEmp, { headers, responseType: 'text' });
  }
  updateAddress(officeId: number, houseNo: string, city: string, state: string, country: string, zip: number, street: string) {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.patch(`${this.baseUrl}/${officeId}/${houseNo}/${city}/${state}/${country}/${zip}/${street}`, {}, { headers, responseType: 'text' })
  }

  addPayment(courierId: number, pmode: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: localStorage.getItem('token') });
    return this.http.patch(`${this.baseUrl}/${courierId}/${pmode}`, {} , { headers, responseType: 'text' });
  }
}
