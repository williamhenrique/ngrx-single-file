import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/product/product.component').then(
        (m) => m.ProductComponent
      ),
  },
];
