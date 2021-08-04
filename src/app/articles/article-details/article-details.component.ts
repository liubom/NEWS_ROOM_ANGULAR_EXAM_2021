import { Component, OnInit, Input} from '@angular/core';
import {IArticle} from "../../interfaces/article";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../articles-list/articles.service";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article!: IArticle;
  articleId!: number;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {

    this.articleId = Number(this.route.snapshot.paramMap.get('id'));

    this.articlesService
      .getArticle(this.articleId)
      .subscribe(article => this.article = article);
  }

  ngOnInit(): void {
  }
}
