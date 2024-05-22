import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [],
  template: ` <p>recipes-list works!</p> `,
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
