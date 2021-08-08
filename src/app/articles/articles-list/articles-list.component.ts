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
  isLiked: boolean = !!JSON.parse(String(localStorage.getItem(`isLiked`)));
  mockUser: string = '@liubo';
  likes: Array<number> | undefined = JSON.parse(<string>localStorage.getItem('likes'));

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  fetchArticles() {
    this.articlesService.loadArticles().subscribe(articles => this.articlesList = articles);
  }

  likeArticle(id: number): void {
    if (!localStorage.getItem('likes')){
      localStorage.setItem('likes', '[]');
    }

    if (!this.likes?.includes(id)) {
      this.likes = [...this.likes!, id];
      localStorage.setItem('likes', JSON.stringify(this.likes));
    }
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
