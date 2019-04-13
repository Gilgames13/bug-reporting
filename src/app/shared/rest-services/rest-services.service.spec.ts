import { TestBed } from '@angular/core/testing';

import { RestServicesService } from './rest-services.service';

describe('RestServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestServicesService = TestBed.get(RestServicesService);
    expect(service).toBeTruthy();
  });
});
