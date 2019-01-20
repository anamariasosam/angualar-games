import { TestBed } from '@angular/core/testing';

import { CatsServiceService } from './cats-service.service';

describe('CatsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatsServiceService = TestBed.get(CatsServiceService);
    expect(service).toBeTruthy();
  });
});
