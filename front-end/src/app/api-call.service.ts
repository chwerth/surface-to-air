import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http: HttpClient
  ) { }

  sendGetRequest(city: String) {
    return this.http.get('https://api.openaq.org/v1/measurements?city=' + city)
  }
}