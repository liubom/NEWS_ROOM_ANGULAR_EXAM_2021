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

  ngOnInit(): void {
  }
}
