import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-display-response',
  templateUrl: './display-response.component.html',
  styleUrls: ['./display-response.component.css']
})
export class DisplayResponseComponent implements OnInit {

  constructor(private apicall: ApiCallService) { }

  results = []

  getCityData() {
    console.log("The button was clicked! :)")
    this.apicall.sendGetRequest('Huntsville').subscribe((data: any[])=>{
      console.log(data);
      this.results = data["results"];
    })
  }

  ngOnInit() {
  }
}