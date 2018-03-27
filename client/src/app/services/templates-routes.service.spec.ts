import { TestBed, inject } from '@angular/core/testing';

import { TemplatesRoutesService } from './templates-routes.service';

describe('TemplatesRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplatesRoutesService]
    });
  });

  it('should be created', inject([TemplatesRoutesService], (service: TemplatesRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
