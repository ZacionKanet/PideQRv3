import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilEditPage } from './perfil-edit.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Agrega esta importación


describe('PerfilEditPage', () => {
  let component: PerfilEditPage;
  let fixture: ComponentFixture<PerfilEditPage>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilEditPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: '123' })) },
        },
      ],
      imports: [HttpClientTestingModule],  // Agrega esta importación
    }).compileComponents();


    fixture = TestBed.createComponent(PerfilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





