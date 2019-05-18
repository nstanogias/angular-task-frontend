import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }
  handleLogin(username, password) {
    return this.http.post<any>('/auth/login', {
      username, password
    }).pipe(
      map(
        data => {
          console.log(data);
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          return data;
        }
      )
    );
  }
  handleSignup(username, password) {
    return this.http.post('/auth/register', {
      username, password
    }).pipe(
      map(
        data => {
          console.log(data);
          return data;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
  getUsername() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getToken() {
    return sessionStorage.getItem(TOKEN);
  }
}
