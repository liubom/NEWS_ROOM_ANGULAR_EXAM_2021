import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddCommentComponent,
    ViewCommentsComponent
  ],
  exports: [
    AddCommentComponent,
    ViewCommentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CommentsModule { }
