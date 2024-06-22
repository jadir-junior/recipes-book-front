import { Component } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { RecipesFilterComponent } from '../components/recipes-filter/recipes-filter.component';
import { DailyDishSectionComponent } from '../../components/daily-dish-section/daily-dish-section.component';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [
    RecipesListComponent,
    RecipesFilterComponent,
    DailyDishSectionComponent,
  ],
  template: `<div>
    <app-daily-dish-section></app-daily-dish-section>
    <!-- <app-recipes-filter></app-recipes-filter> -->
    <h1>Explore Recipes</h1>
    <app-recipes-list></app-recipes-list>
  </div>`,
})
export class RecipesPageComponent {}
