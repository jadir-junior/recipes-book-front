import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [DataViewModule],
  template: `
    <div>
      <p-dataView
        #dv
        [value]="recipes"
        [paginator]="true"
        [rows]="9"
        filterBy="name"
        layout="grid"
      ></p-dataView>
    </div>
  `,
  styles: ``,
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((result) => {
      this.recipes = result;
    });
  }
}
