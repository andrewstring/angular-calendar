import { TestBed } from '@angular/core/testing';

import { DateinfoService } from './dateInfo.service';

describe('DateinfoService', () => {
  let service: DateinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
