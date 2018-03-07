import { TestBed, inject } from '@angular/core/testing';

import { ViewingService } from './viewing.service';

describe('ViewingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewingService]
    });
  });

  it('should be created', inject([ViewingService], (service: ViewingService) => {
    expect(service).toBeTruthy();
  }));
});
