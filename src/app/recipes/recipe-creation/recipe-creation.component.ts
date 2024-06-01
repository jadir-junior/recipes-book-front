import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { catchError, concatMap, of, tap } from 'rxjs';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-creation.component.html',
  styleUrl: './recipe-creation.component.css',
})
export class RecipeCreationComponent {
  recipeForm = this.fb.group({
    title: [''],
    ingredients: [''],
    tags: [''],
    imageUrl: [''],
    cookingTime: [''],
    yield: [''],
    prepTime: [''],
    steps: [''],
  });

  tags = recipeTags.TAGS;

  valueChange$ = this.recipeForm.valueChanges.pipe(
    concatMap((formValue) => this.recipeService.saveRecipe(formValue)),
    catchError((errors) => of(errors)),
    tap(() => this.saveSuccess())
  );

  constructor(private fb: FormBuilder, private recipeService: RecipesService) {}

  saveSuccess(): void {
    console.log('Saved successfully');
  }
}
