import { Injectable } from '@angular/core';
import {IArticle} from "../../interfaces/article";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  loadArticles(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>('http://localhost:5001/articles');
  }

  getArticle(id: number){
    return this.http.get<IArticle>(`http://localhost:5001/articles/` + id);
  }

  searchInArticles(str: string){
    return this.http.get<Array<IArticle>>(`http://localhost:5001/articles?title_like=${str}`);
  }

  getWeather(){
    return this.http.get(`http://api.weatherstack.com/current?access_key=c5a133241628e4a3a957a1b4821b5bcd&query=Sofia`);
  }

}



