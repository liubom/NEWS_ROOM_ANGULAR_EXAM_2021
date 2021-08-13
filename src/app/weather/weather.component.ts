import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ArticlesService} from "../articles/articles-list/articles.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  obsWeather: Observable<any> = this.articlesService.getWeather();

  constructor(private http: HttpClient, private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

}
