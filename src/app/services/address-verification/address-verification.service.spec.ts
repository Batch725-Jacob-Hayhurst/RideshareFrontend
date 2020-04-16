import { TestBed } from '@angular/core/testing';

import { AddressVerificationService } from './address-verification.service';

describe('AddressVerificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressVerificationService = TestBed.get(AddressVerificationService);
    expect(service).toBeTruthy();
  });
});
