import { TestBed } from '@angular/core/testing';

import { ComplaintsBookService } from './complaints-book.service';

describe('ComplaintsBookService', () => {
  let service: ComplaintsBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
