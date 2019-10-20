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
  show = false;

  getCityData(city: String) {
    console.log("The button was clicked! :)")
    this.apicall.sendGetRequest(city).subscribe((data: any[])=>{
      console.log(data);
      this.results = data["results"];
      this.show = !this.show
    })
  }

  ngOnInit() {
  }
}