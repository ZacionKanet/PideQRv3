import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEditPage } from './product-edit.page';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute


describe('ProductEditPage', () => {
  let component: ProductEditPage;
  let fixture: ComponentFixture<ProductEditPage>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ProductEditPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Configura aquí cualquier propiedad o método que estés utilizando en tu componente
            snapshot: {
              paramMap: {
                get: (key: string) => 'testProductId', // Ajusta según tus necesidades
              },
            },
          },
        },
      ],
    }).compileComponents();


    fixture = TestBed.createComponent(ProductEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



