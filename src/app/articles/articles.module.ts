import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticlesListComponent} from './articles-list/articles-list.component';
import {ArticleDetailsComponent} from './article-details/article-details.component';
import {AddArticleComponent} from './add-article/add-article.component';
import {CommentsModule} from "./comments/comments.module";
import {LikeBtnComponent} from "./like-btn/like-btn.component";
import {UsersModule} from "../users/users.module";

@NgModule({
    declarations: [
        ArticlesListComponent,
        ArticleDetailsComponent,
        AddArticleComponent,
        LikeBtnComponent,
    ],
    exports: [
        ArticleDetailsComponent
    ],
    imports: [
        CommonModule,
        ArticlesRoutingModule,
        CommentsModule,
        UsersModule,
    ]
})
export class ArticlesModule {
}
