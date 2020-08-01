import { TestBed } from '@angular/core/testing';

import { ServicejuegoService } from './servicejuego.service';

describe('ServicejuegoService', () => {
  let service: ServicejuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicejuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
