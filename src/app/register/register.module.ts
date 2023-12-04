import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { RegisterPageRoutingModule } from './register-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { RegisterPage } from './register.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RegisterPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}





