import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaTresComponent } from './semana-tres.component';

describe('SemanaTresComponent', () => {
  let component: SemanaTresComponent;
  let fixture: ComponentFixture<SemanaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanaTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
