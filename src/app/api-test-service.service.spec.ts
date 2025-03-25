import { TestBed } from '@angular/core/testing';

import { ApiTestServiceService } from './api-test-service.service';

describe('ApiTestServiceService', () => {
  let service: ApiTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
