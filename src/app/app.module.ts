import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {HeaderComponent} from "./core/header/header.component";
import {FooterComponent} from "./core/footer/footer.component";
import {ArticlesService} from "../../../app4ext/src/app/services/articles.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
    ],
    providers: [
        ArticlesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
