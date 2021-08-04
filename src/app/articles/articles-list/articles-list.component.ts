import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "./articles.service";
import {IArticle} from "../../interfaces/article";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articlesList: IArticle[] = [];

  constructor(private articlesService: ArticlesService) {
  }

  fetchArticles(){
    this.articlesService.loadArticles().subscribe(articles => this.articlesList = articles);
  }

  ngOnInit(): void {
    this.fetchArticles();
  }

}
