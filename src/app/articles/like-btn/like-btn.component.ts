import {Component, ElementRef, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent implements OnInit, OnChanges {

  @Input() likes: number[] | undefined;
  @Input() articleId: number | undefined;
  @Output() like_article = new EventEmitter();
  isLiked: boolean = false;

  constructor(private element: ElementRef) {
  }

  likeArticle() {
    this.like_article.emit(this.articleId);
  }

  ngOnInit(): void {
    if (this.likes && this.likes!.includes!(this.articleId!)) {
      this.isLiked = true;
    }
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.likes.currentValue) {
      if (this.likes!.includes!(this.articleId!)) {
        this.isLiked = true;
      }
    }
  }
}
