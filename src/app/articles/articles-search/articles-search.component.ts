import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../articles-list/articles.service";

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.css']
})
export class ArticlesSearchComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

}
