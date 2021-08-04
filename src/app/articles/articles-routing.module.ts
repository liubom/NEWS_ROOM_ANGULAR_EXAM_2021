import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesListComponent} from "./articles-list/articles-list.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";

const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article', component: ArticleDetailsComponent},
  {path: '', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
