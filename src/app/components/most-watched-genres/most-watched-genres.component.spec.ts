import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWatchedGenresComponent } from './most-watched-genres.component';

describe('MostWatchedGenresComponent', () => {
  let component: MostWatchedGenresComponent;
  let fixture: ComponentFixture<MostWatchedGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostWatchedGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostWatchedGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
