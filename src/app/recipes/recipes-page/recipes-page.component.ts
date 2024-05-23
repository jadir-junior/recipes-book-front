import { Component } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { RecipesFilterComponent } from '../components/recipes-filter/recipes-filter.component';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [RecipesListComponent, RecipesFilterComponent],
  template: `<div>
    <app-recipes-filter></app-recipes-filter>
    <app-recipes-list></app-recipes-list>
  </div>`,
})
export class RecipesPageComponent {}
