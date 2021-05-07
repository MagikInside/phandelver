import { TestBed } from '@angular/core/testing';

import { CharOptionsService } from './char-options.service';

describe('CharOptionsService', () => {
  let service: CharOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
