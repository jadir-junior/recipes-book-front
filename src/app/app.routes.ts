import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./recipes/recipes-page/recipes-page.component').then(
        (comp) => comp.RecipesPageComponent
      ),
  },
];
