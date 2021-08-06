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
  loggedIn: boolean = !!JSON.parse(String(localStorage.getItem('loggedIn')));

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  fetchArticles() {
    this.articlesService.loadArticles().subscribe(articles => this.articlesList = articles);
  }

  likeArticle(id: number) {
    console.log('Article Liked...' + id);
  }

  logInOut(): void {
    localStorage.getItem('loggedIn') === 'true' ? localStorage.setItem('loggedIn', 'false') : localStorage.setItem('loggedIn', 'true');
    this.loggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
    console.log(this.loggedIn);
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  addNewArticle() {
    this.router.navigate(['/add-article']);
  }

  ngOnInit(): void {
    this.fetchArticles();
    if (!localStorage.getItem('loggedIn')) {
      localStorage.setItem('loggedIn', 'false');
    }
  }

}
