import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ProductServiceService } from './product-service.service';


describe('ProductServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductServiceService],
      imports: [HttpClientTestingModule]
    });
  });


  it('should be created', inject([ProductServiceService], (service: ProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});



