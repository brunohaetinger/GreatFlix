import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUserListComponent } from './top-user-list.component';

describe('TopUserListComponent', () => {
  let component: TopUserListComponent;
  let fixture: ComponentFixture<TopUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
