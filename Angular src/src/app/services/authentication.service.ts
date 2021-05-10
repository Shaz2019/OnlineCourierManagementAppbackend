import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post<any>('http://localhost:9090/authenticate', credentials).pipe(
      map(
        response => {
          if (response && response.token) {
            console.log(response.token);
            let tokenStr = 'Bearer ' + response.token;
            localStorage.setItem('token', tokenStr);
            return response;
          }
        },
        error => error

      )
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (!token)
      return false;

    return tokenNotExpired(null, token);
  }
}
