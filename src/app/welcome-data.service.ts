import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class WelcomeMessage {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  fetchWelcomeMessage() {
    return this.http.get<WelcomeMessage>(`/welcome`);
  }
}
