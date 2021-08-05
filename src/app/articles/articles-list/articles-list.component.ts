import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "./articles.service";
import {IArticle} from "../../interfaces/article";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articlesList: IArticle[] = [];
  loggedIn: boolean = false;

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  fetchArticles() {
    this.articlesService.loadArticles().subscribe(articles => this.articlesList = articles);
  }

  likeArticle(id: number) {
    console.log('Article Liked...' + id);
  }

  logInOut(){
    this.loggedIn = !this.loggedIn;
  }

  addNewArticle(){
    this.router.navigate(['/add-article']);
  }

  ngOnInit(): void {
    this.fetchArticles();
  }

}
