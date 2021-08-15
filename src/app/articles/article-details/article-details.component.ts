import {Component, OnInit, Input} from '@angular/core';
import {IArticle} from "../../interfaces/article";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../articles-list/articles.service";
import {switchMap, tap} from "rxjs/operators";
import {HeaderLoggedUserDirective} from "../../header-logged-user.directive";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {

  article: IArticle | undefined;
  currUser: string | null = localStorage.getItem('currentUser');
  likes: number[] | undefined = JSON.parse(<string>localStorage.getItem(`${this.currUser}_likes`));
  addCommentVisible: boolean = false;
  viewCommentsVisible: boolean = false;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService, public headerDirective: HeaderLoggedUserDirective) {

    // V1 this.articleId = Number(this.route.snapshot.paramMap.get('id'));

    // V2 this.articlesService
    //   .getArticle(this.route.snapshot.params.id)
    //   .subscribe(article => this.article = article);

    this.route.params.pipe(
      tap(() => this.article = undefined),
      switchMap(({id}) => this.articlesService.getArticle(id))
    ).subscribe(article => this.article = article)

  }

  addComment(id: number, title: string) {
    this.addCommentVisible = !this.addCommentVisible;
  }

  viewComments(id: number, title: string) {
    this.viewCommentsVisible = !this.viewCommentsVisible;
  }

  likeArticle(id: number): void {
    if (!this.likes?.includes(id)) {
      this.likes = [...this.likes!, id];
      localStorage.setItem(`${this.currUser}_likes`, JSON.stringify(this.likes));
    }

    this.headerDirective.likesCounterRefresh();
  }

  ngOnInit(): void {
  }
}
