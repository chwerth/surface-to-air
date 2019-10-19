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

  ngOnInit() {
    this.apicall.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.results = data["results"];
    })  
  }

}
