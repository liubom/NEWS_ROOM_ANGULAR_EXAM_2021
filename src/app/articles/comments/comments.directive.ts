import {Directive, Injectable} from '@angular/core';
import {CommentsService} from "./comments.service";
import {IArticleComment} from "../../interfaces/article-comment";
import {Router} from "@angular/router";

@Injectable(
  {
    providedIn: "root",
  }
)

@Directive({
  selector: '[appComments]'
})
export class CommentsDirective {

  comments: IArticleComment[] = [];

  constructor(public commentService: CommentsService, private router: Router) {
    this.commentService.getComments(+this.router.url.split('/')[2]).subscribe(data => this.comments = data);
  }

}
