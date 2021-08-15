import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../articles-list/articles.service";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {IArticle} from "../../interfaces/article";

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.css']
})
export class ArticlesSearchComponent implements OnInit {

  result: Observable<IArticle[]> | undefined;

  constructor(private articlesService: ArticlesService) { }

  searchForArticle(form: NgForm) {

    if (!form.invalid) {
      let searchString: string = form.value.search;
      this.result = this.articlesService.searchInArticles(searchString);
    }
  }

  ngOnInit(): void {
  }

}
