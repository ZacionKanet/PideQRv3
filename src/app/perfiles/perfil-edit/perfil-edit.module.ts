import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule } from '@ionic/angular';


import { PerfilEditPageRoutingModule } from './perfil-edit-routing.module';


import { PerfilEditPage } from './perfil-edit.page';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute aquí


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerfilEditPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea
  providers: [ActivatedRoute]  // Mueve ActivatedRoute aquí
})
export class PerfilEditPageModule {}





