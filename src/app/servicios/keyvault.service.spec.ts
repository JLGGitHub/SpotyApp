import { TestBed } from '@angular/core/testing';

import { KeyvaultService } from './keyvault.service';

describe('KeyvaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyvaultService = TestBed.get(KeyvaultService);
    expect(service).toBeTruthy();
  });
});
