import {Component, OnInit, SimpleChange} from '@angular/core';
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
  openSignIn: boolean = false;
  isLiked: boolean = !!JSON.parse(String(localStorage.getItem(`isLiked`)));
  isLiker: boolean = false;
  currUser: string = '@pesho';
  likes: number[] | undefined = JSON.parse(<string>localStorage.getItem(`${this.currUser}_likes`));

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  fetchArticles() {
    this.articlesService.loadArticles().subscribe(articles => this.articlesList = articles);
  }

  likeArticle(id: number): void {
    if (!this.likes?.includes(id)) {
      this.likes = [...this.likes!, id];
      localStorage.setItem(`${this.currUser}_likes`, JSON.stringify(this.likes));
    }

    console.log(this.likes);
  }

  goLogin(): void {
    localStorage.getItem('loggedIn') === 'true' ? localStorage.setItem('loggedIn', 'false') : localStorage.setItem('loggedIn', 'true');
    this.loggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
    if (this.loggedIn){
      this.openSignIn = true;
    }

    console.log('From Parent - Articles List');
    console.log(this.openSignIn)
  }

  toCloseLoginNow(value: boolean){
    this.openSignIn = value;
    console.log('From event');
    console.log(this.openSignIn);
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

    if (!localStorage.getItem(`${this.currUser}_likes`)){
      localStorage.setItem(`${this.currUser}_likes`, "[]");
    }
  }



}
