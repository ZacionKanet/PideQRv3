import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule para las pruebas HTTP


describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;


  beforeEach(waitForAsync(() => { // Usa waitForAsync para manejar operaciones asíncronas
    TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [HttpClientTestingModule], // Usa HttpClientTestingModule para las pruebas HTTP
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





