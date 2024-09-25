import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule, 
    ProductModule
  ],
  exports: [AuthModule, ProductModule]
})
export class FeaturesModule { }
