import { ProductServiceService } from './../product-service.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductListPage } from './product-list.page';


import { HttpClientModule } from '@angular/common/http';


describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPage],
      providers: [ProductServiceService],
      imports: [HttpClientModule], // Asegúrate de importar HttpClientModule aquí
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



