import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticlesListComponent} from './articles-list/articles-list.component';
import {ArticleDetailsComponent} from './article-details/article-details.component';
import {AddArticleComponent} from './add-article/add-article.component';
import {CommentsModule} from "./comments/comments.module";
import {LikeBtnChangeDirective} from "../like-btn-change.directive";

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailsComponent,
    AddArticleComponent,
    LikeBtnChangeDirective
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    CommentsModule
  ]
})
export class ArticlesModule {
}
