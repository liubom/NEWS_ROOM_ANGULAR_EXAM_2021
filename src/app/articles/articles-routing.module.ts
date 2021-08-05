import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesListComponent} from "./articles-list/articles-list.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {AddArticleComponent} from "./add-article/add-article.component";

const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticleDetailsComponent},
  {path: 'add-article', component: AddArticleComponent},
  {path: '', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
