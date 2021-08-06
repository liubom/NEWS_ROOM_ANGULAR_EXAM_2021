import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {ArticlesService} from "../../../app4ext/src/app/services/articles.service";
import {HttpClientModule} from "@angular/common/http";
import {ArticlesModule} from "./articles/articles.module";
import {PageNoteFoundComponent} from './page-note-found/page-note-found.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from "./auth.guard";
import {ArticlesFavComponent} from './articles/articles-fav/articles-fav.component';
import {UsersModule} from "./users/users.module";
import { ArticlesSearchComponent } from './articles/articles-search/articles-search.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNoteFoundComponent,
    LoginComponent,
    ArticlesFavComponent,
    ArticlesSearchComponent,
    AboutUsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    UsersModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ArticlesService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
