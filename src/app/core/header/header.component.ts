import {Component, OnInit} from '@angular/core';
import {HeaderLoggedUserDirective} from "../../header-logged-user.directive";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(public headerDirective: HeaderLoggedUserDirective, private http: HttpClient) {
  }

  getWeather(){
    this.http.get('http://api.weatherstack.com/current?access_key=c5a133241628e4a3a957a1b4821b5bcd&query=Sofia')
      .subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this.getWeather();
  }
}
