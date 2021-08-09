import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesListComponent} from "./articles-list/articles-list.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {AuthGuard} from "../auth.guard";
import {ArticlesFavComponent} from "./articles-fav/articles-fav.component";
import {ArticlesSearchComponent} from "./articles-search/articles-search.component";

const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticleDetailsComponent, canActivate: [AuthGuard]},
  {path: 'add-article', component: AddArticleComponent},
  {path: 'favorites', component: ArticlesFavComponent},
  {path: 'search', component: ArticlesSearchComponent},
  {path: '', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
