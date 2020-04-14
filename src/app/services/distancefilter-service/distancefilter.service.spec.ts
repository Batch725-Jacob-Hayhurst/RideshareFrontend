import { TestBed } from '@angular/core/testing';

import { DistancefilterService } from './distancefilter.service';

describe('DistancefilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistancefilterService = TestBed.get(DistancefilterService);
    expect(service).toBeTruthy();
  });
});
