import { TestBed } from '@angular/core/testing';

import { CnjokesService } from './cnjokes.service';

describe('CnjokesService', () => {
  let service: CnjokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnjokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
