import { TestBed, inject } from '@angular/core/testing';

import { PointOfSaleService } from './point-of-sale.service';

describe('PointOfSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointOfSaleService]
    });
  });

  it('should be created', inject([PointOfSaleService], (service: PointOfSaleService) => {
    expect(service).toBeTruthy();
  }));
});
