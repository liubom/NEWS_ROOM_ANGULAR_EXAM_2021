import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ArticlesService} from "../articles-list/articles.service";
import {IArticle} from "../../interfaces/article";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-articles-fav',
  templateUrl: './articles-fav.component.html',
  styleUrls: ['./articles-fav.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ArticlesFavComponent implements OnInit {

  articlesList: IArticle[] = [];
  currUser: string | null = localStorage.getItem('currentUser');
  likes: number[] | undefined = JSON.parse(<string>localStorage.getItem(`${this.currUser}_likes`));

  constructor(private articlesService: ArticlesService) { }

  fetchArticles() {
    this.articlesService.loadArticles()
      .pipe(
        map(art => art.filter(article => this.likes?.includes(article.id)))
      )
      .subscribe(articles => [...this.articlesList] = articles);
  }

  ngOnInit(): void {
    this.fetchArticles();
  }

}
