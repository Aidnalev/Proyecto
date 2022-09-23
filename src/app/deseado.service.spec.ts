import { TestBed } from '@angular/core/testing';

import { DeseadoService } from './deseado.service';

describe('DeseadoService', () => {
  let service: DeseadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeseadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
