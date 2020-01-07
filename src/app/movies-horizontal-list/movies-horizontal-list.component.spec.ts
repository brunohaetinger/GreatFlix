import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHorizontalListComponent } from './movies-horizontal-list.component';

describe('MoviesHorizontalListComponent', () => {
  let component: MoviesHorizontalListComponent;
  let fixture: ComponentFixture<MoviesHorizontalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesHorizontalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
