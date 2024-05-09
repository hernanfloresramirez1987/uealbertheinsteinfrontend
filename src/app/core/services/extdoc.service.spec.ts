import { TestBed } from '@angular/core/testing';

import { ExtdocService } from './extdoc.service';

describe('ExtdocService', () => {
  let service: ExtdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
