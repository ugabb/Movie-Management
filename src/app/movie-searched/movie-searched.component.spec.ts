import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchedComponent } from './movie-searched.component';

describe('MovieSearchedComponent', () => {
  let component: MovieSearchedComponent;
  let fixture: ComponentFixture<MovieSearchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSearchedComponent]
    });
    fixture = TestBed.createComponent(MovieSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
