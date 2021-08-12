import {Component, OnInit} from '@angular/core';
import {CommentsDirective} from "../comments.directive";
import {IArticleComment} from "../../../interfaces/article-comment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

  showComments: IArticleComment[] = [];

  constructor(public commentDirective: CommentsDirective, public router: Router) {
  }

  filterArticles(){
    return this.commentDirective.comments.filter(c => c.postId === +this.router.url.split('/')[2]);
  }

  ngOnInit(): void {
    this.filterArticles();
  }
}
