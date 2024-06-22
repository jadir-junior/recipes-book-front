import { Component } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { RecipesFilterComponent } from '../components/recipes-filter/recipes-filter.component';
import { DailyDishSectionComponent } from '../../components/daily-dish-section/daily-dish-section.component';
import { ShareYourRecipesSectionComponent } from '../../components/share-your-recipes-section/share-your-recipes-section.component';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [
    RecipesListComponent,
    RecipesFilterComponent,
    DailyDishSectionComponent,
    ShareYourRecipesSectionComponent,
  ],
  template: `<div>
    <app-daily-dish-section></app-daily-dish-section>
    <div class="mt-8 mb-8">
      <app-share-your-recipes-section></app-share-your-recipes-section>
    </div>
    <!-- <app-recipes-filter></app-recipes-filter> -->
    <h1>Explore Recipes</h1>
    <app-recipes-list></app-recipes-list>
  </div>`,
})
export class RecipesPageComponent {}
