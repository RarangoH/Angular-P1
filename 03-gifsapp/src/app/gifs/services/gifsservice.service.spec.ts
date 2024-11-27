import { TestBed } from '@angular/core/testing';

import { GifsserviceService } from './gifsservice.service';

describe('GifsserviceService', () => {
  let service: GifsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
