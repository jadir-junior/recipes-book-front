import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./recipes/recipes-list/recipes-list.component').then(
        (comp) => comp.RecipesListComponent
      ),
  },
];
