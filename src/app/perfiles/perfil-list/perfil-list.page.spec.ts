import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilListPage } from './perfil-list.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PerfilListPage', () => {
  let component: PerfilListPage;
  let fixture: ComponentFixture<PerfilListPage>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilListPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: '123' })) },
        },
      ],
      imports: [HttpClientTestingModule], // Agrega esto para HttpClientTestingModule
    }).compileComponents();


    fixture = TestBed.createComponent(PerfilListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





