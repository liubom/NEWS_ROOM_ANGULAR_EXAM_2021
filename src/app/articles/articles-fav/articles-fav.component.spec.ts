import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFavComponent } from './articles-fav.component';

describe('ArticlesFavComponent', () => {
  let component: ArticlesFavComponent;
  let fixture: ComponentFixture<ArticlesFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
