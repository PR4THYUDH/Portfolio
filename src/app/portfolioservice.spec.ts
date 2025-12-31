import { TestBed } from '@angular/core/testing';

import { Portfolioservice } from './portfolioservice';

describe('Portfolioservice', () => {
  let service: Portfolioservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Portfolioservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
