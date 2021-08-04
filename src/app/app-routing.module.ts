import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNoteFoundComponent} from "./page-note-found/page-note-found.component";

const routes: Routes = [

  {path: '**', component: PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
