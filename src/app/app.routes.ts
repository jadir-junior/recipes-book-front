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
  {
    path: 'recipes/details',
    loadComponent: () =>
      import(
        './recipes/recipes-details-page/recipes-details-page.component'
      ).then((comp) => comp.RecipesDetailsPageComponent),
  },
  {
    path: 'recipes/create',
    loadComponent: () =>
      import('./recipes/recipe-creation/recipe-creation.component').then(
        (comp) => comp.RecipeCreationComponent
      ),
  },
];
