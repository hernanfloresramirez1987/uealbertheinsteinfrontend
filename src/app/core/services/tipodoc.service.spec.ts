import { TestBed } from '@angular/core/testing';

import { TipodocService } from './tipodoc.service';

describe('TipodocService', () => {
  let service: TipodocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
