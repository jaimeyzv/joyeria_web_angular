import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsBooksComponent } from './complaints-books.component';

describe('ComplaintsBooksComponent', () => {
  let component: ComplaintsBooksComponent;
  let fixture: ComponentFixture<ComplaintsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
