import { Routes } from '@angular/router';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { NotFoundComponent } from './features/error/not-found/not-found.component';
import { ErrorComponent } from './features/error/error/error.component';
import { AuthGuard } from './core/services/auth/auth-guard.guard';
import { HomeComponent } from './features/home/home/home.component';

export const routes: Routes = [
    {
      path: '', 
      component: HomeComponent
    },
    {
      path: 'auth/sign-in', 
      component: SignInComponent
    },
    {
      path: 'auth/sign-up', 
      component: SignUpComponent
    },
    {
      path: 'products', 
      component: ProductListComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'products/:productId', 
      component: ProductDetailComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'error', 
      component: ErrorComponent
    },
    {
      path: '**', 
      component: NotFoundComponent
    }
];
