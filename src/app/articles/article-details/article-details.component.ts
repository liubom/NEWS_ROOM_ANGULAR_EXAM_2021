import { Component, OnInit, Input} from '@angular/core';
import {IArticle} from "../../interfaces/article";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../articles-list/articles.service";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {


  signetIn: boolean = false;
  article: IArticle | undefined;
  // articleId!: number;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {

    // V1 this.articleId = Number(this.route.snapshot.paramMap.get('id'));

    // V2 this.articlesService
    //   .getArticle(this.route.snapshot.params.id)
    //   .subscribe(article => this.article = article);

    this.route.params.pipe(
      tap(() => this.article = undefined),
      switchMap(({id}) => this.articlesService.getArticle(id))
    ).subscribe(article => this.article = article)

  }

  ngOnInit(): void {
  }
}
