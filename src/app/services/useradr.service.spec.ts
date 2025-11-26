import { TestBed } from '@angular/core/testing';

import { UseradrService } from './useradr.service';

describe('UseradrService', () => {
  let service: UseradrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseradrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
