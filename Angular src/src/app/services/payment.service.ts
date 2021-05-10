import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:9090/payment";

  getPaymentDetailsById(Id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${Id}`);
  }
  getAllPaymentDetails(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
}
