import { PerfilServiceService } from './perfil.service.service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PerfilListPage } from './perfil-list/perfil-list.page';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule


describe('PerfilListPage', () => {
  let component: PerfilListPage;
  let fixture: ComponentFixture<PerfilListPage>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilListPage],
      imports: [IonicModule.forRoot(), HttpClientModule], // Agrega HttpClientModule aquí
      providers: [PerfilServiceService], // Asegúrate de que el servicio esté en providers
    }).compileComponents();


    fixture = TestBed.createComponent(PerfilListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





