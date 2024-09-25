import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductDetailComponent,
    ProductListComponent,
    ProductRoutingModule
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
