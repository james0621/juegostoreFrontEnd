import { TestBed } from '@angular/core/testing';

import { ServicefacturaService } from './servicefactura.service';

describe('ServicefacturaService', () => {
  let service: ServicefacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicefacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
