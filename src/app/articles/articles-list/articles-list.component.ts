import {ChangeDetectionStrategy, Component, OnInit, SimpleChange} from '@angular/core';
import {ArticlesService} from "./articles.service";
import {IArticle} from "../../interfaces/article";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ArticlesListComponent implements OnInit {

  articlesList: IArticle[] = [];
  loggedIn: boolean = !!JSON.parse(String(localStorage.getItem('loggedIn')));
  openSignIn: boolean = false;
  currUser: string | null = '';
  likes: number[] = [];

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  fetchArticles() {
    this.articlesService.loadArticles().subscribe(articles => this.articlesList = articles);
  }

  likeArticle(id: number): void {
   this.likes = JSON.parse(<string>localStorage.getItem(`${this.currUser}_likes`));
    if (!this.likes?.includes(id)) {
      this.likes = [...this.likes!, id];
      localStorage.setItem(`${this.currUser}_likes`, JSON.stringify(this.likes));
    }
  }

  logOut(){
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('currentUser', '');
    this.loggedIn = false;
  }

  goLogin(): void {
    localStorage.getItem('loggedIn') === 'true' ? localStorage.setItem('loggedIn', 'false') : false;
    this.loggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));

    this.openSignIn = true;
  }

  toCloseLoginNow(value: any) { //From Event
    this.openSignIn = false;
    if (!this.loggedIn) {
      this.loggedIn = true;
      this.currUser = `${value.user}`;
      if (!localStorage.getItem(`${this.currUser}_likes`)) {
        localStorage.setItem(`${this.currUser}_likes`, "[]");
      }
      console.log(this.currUser);
    }
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  addNewArticle() {
    this.router.navigate(['/add-article']);
  }

  ngOnInit(): void {
    this.fetchArticles();

    if(localStorage.getItem('currentUser') !== '') {
      this.currUser = localStorage.getItem('currentUser');
      console.log(this.currUser);
      this.likes = JSON.parse(<string>localStorage.getItem(`${this.currUser}_likes`));
    }

    else {
      console.log('No current User...');
    }
  }
}
