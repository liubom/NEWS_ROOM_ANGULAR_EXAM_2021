import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

@NgModule({
  declarations: [
    AddCommentComponent,
    ViewCommentsComponent
  ],
  exports: [
    AddCommentComponent,
    ViewCommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
