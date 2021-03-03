import { TestBed } from '@angular/core/testing';

import { ProductServieService } from './product-servie.service';

describe('ProductServieService', () => {
  let service: ProductServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
