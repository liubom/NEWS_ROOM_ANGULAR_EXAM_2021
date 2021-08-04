import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-note-found',
  templateUrl: './page-note-found.component.html',
  styleUrls: ['./page-note-found.component.css']
})
export class PageNoteFoundComponent implements OnInit {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
