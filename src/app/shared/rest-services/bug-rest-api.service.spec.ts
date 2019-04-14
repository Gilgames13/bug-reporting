import { TestBed } from '@angular/core/testing';

import { BugRestApiService } from './bug-rest-api.service';

describe('BugRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugRestApiService = TestBed.get(BugRestApiService);
    expect(service).toBeTruthy();
  });
});
