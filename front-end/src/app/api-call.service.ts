import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http: HttpClient
  ) { }

  sendGetRequest() {
    return this.http.get('https://api.openaq.org/v1/cities')
  }
}
