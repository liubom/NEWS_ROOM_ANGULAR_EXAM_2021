import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArticlesService} from "../articles/articles-list/articles.service";

@Component({
  selector: 'app-page-note-found',
  templateUrl: './page-note-found.component.html',
  styleUrls: ['./page-note-found.component.css']
})
export class PageNoteFoundComponent implements OnInit {

  constructor(private router: Router, private articlesService: ArticlesService) { }

  articlesList = this.articlesService.loadArticles();

  goHome(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
