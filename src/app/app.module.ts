import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {ArticlesService} from "../../../app4ext/src/app/services/articles.service";
import {HttpClientModule} from "@angular/common/http";
import {ArticlesModule} from "./articles/articles.module";
import {PageNoteFoundComponent} from './page-note-found/page-note-found.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNoteFoundComponent,
    ],
    imports: [
        BrowserModule,
        ArticlesModule,
        CoreModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        ArticlesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
