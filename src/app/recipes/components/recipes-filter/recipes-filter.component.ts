import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  template: `
    <div>
      <form [formGroup]="recipeForm">
        <fieldset>
          <legend>Filters</legend>
          <div>
            <p-button (onClick)="clearFilter()" label="Clear all"></p-button>
          </div>
          <label for="title">Keyword:</label>
          <input type="text" id="title" formControlName="title" />
          <label for="category">Category:</label>
          <input type="text" id="category" formControlName="category" />
          <label for="ingredient">Ingredient:</label>
          <input type="text" id="ingradient" formControlName="ingredient" />
          <label for="tags">Tags:</label>
          <input type="text" id="tags" formControlName="tags" />
          <label for="prepTime">Preparation Time:</label>
          <input type="text" id="prepTime" formControlName="prepTime" />
          <label for="cookingTime">Cooking Time:</label>
          <input type="text" id="cookingTime" formControlName="cookingTime" />
          <div>
            <p-button
              (onClick)="filterResults(recipeForm)"
              label="See results"
            ></p-button>
          </div>
        </fieldset>
      </form>
    </div>
  `,
})
export class RecipesFilterComponent {
  recipeForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });

  constructor(private fb: FormBuilder, private recipeService: RecipesService) {}

  clearFilter(): void {}

  filterResults({ value }: FormGroup): void {
    this.recipeService.updateFilter(value);
  }
}
