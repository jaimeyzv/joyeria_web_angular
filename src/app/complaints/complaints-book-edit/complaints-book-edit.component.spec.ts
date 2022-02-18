import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsBookEditComponent } from './complaints-book-edit.component';

describe('ComplaintsBookEditComponent', () => {
  let component: ComplaintsBookEditComponent;
  let fixture: ComponentFixture<ComplaintsBookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsBookEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
