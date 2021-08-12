import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import {FormsModule} from "@angular/forms";
import { CommentsDirective } from './comments.directive';

@NgModule({
  declarations: [
    AddCommentComponent,
    ViewCommentsComponent,
    CommentsDirective
  ],
  exports: [
    AddCommentComponent,
    ViewCommentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CommentsDirective
  ]
})
export class CommentsModule { }
