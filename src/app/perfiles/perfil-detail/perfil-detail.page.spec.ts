import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilDetailPage } from './perfil-detail.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';


describe('PerfilDetailPage', () => {
  let component: PerfilDetailPage;
  let fixture: ComponentFixture<PerfilDetailPage>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PerfilDetailPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: '123' })) },
        },
        // Agrega el servicio PerfilServiceService a la lista de providers
        // y asegúrate de incluir HttpClientModule
        // También, verifica si necesitas agregar algún otro servicio que PerfilServiceService pueda estar utilizando.
      ],
    }).compileComponents();


    fixture = TestBed.createComponent(PerfilDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





