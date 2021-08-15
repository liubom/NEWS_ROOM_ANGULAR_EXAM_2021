import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CommentsDirective} from "../comments.directive";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() title: string = '';
  articleId: number = +this.router.url.split('/')[2];
  //comments: IArticleComment[] = [];
  currentUser: string | null = localStorage.getItem('currentUser');
  newComment: boolean = false;

  constructor(private commentService: CommentsService, private router: Router, public commentDirective: CommentsDirective) {
  }

  newCommentFlashMessage() {
    this.newComment = true;
    setTimeout(() => this.newComment = false, 2000);
  }

  addNewComment(form: NgForm): void {

    let postId = this.articleId;
    let username = this.currentUser;
    let comment = form.value.comment;

    if (!form.invalid) {
      this.commentService.addComment(postId, username, comment).subscribe(data => this.commentDirective.comments.push(data));
      form.reset('');

      this.newCommentFlashMessage();
    }
  }

  ngOnInit(): void {
  }

}
