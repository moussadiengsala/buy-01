import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth', 
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: 'products', 
      loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
    },

    {
      path: '**', 
      redirectTo: ''
    }
];
