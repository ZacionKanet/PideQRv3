import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductAllPageRoutingModule } from './product-all-routing.module';
import { ProductAllPage } from './product-all.page';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ProductAllPageRoutingModule
  ],
  declarations: [ProductAllPage]
})
export class ProductAllPageModule {}



