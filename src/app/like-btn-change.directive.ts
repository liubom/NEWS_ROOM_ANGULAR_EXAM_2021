import {Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appLikeBtnChange]'
})
export class LikeBtnChangeDirective implements OnChanges{

  likes: string | null = localStorage.getItem('likes');

  constructor(private elementRef: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.likes.currentValue){
      this.elementRef.nativeElement.style.color = 'green';
    }
  }

}
