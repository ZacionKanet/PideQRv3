import { PerfilServiceService } from '../perfil.service.service.service';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerfilAddPage } from './perfil-add.page';


import { HttpClientModule } from '@angular/common/http';


describe('PerfilAddPage', () => {
  let component: PerfilAddPage;
  let fixture: ComponentFixture<PerfilAddPage>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilAddPage],
      providers: [PerfilServiceService],
      imports: [HttpClientModule], // Agrega HttpClientModule a los imports
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





