import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNoteFoundComponent} from "./page-note-found/page-note-found.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes = [

  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
