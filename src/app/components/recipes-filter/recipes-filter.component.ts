import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RecipesService } from '../../recipes/services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.css',
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
