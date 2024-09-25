// product-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { authGuardGuard } from '../../core/services/auth-guard.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent, canActivate: [authGuardGuard] },
  { path: ':id', component: ProductDetailComponent, canActivate: [authGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
