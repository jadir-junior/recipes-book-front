import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [DataViewModule],
  template: `
    @if(recipes$ | async; as recipes) {
    <p-dataView
      #dv
      [value]="recipes"
      [paginator]="true"
      [rows]="9"
      filterBy="name"
      layout="grid"
    ></p-dataView>
    }
  `,
  styles: ``,
})
export class RecipesListComponent {
  recipes$ = this.recipeService.recipes$;

  constructor(private recipeService: RecipesService) {}
}
