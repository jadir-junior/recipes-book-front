import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  finalize,
  forkJoin,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { RecipesService } from '../services/recipes.service';
import * as recipeTags from '../../core/model/tags';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { UploadRecipesPreviewService } from '../../core/services/upload-recipes-preview.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-recipe-creation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RadioButtonModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
  ],
  templateUrl: './recipe-creation.component.html',
  styleUrl: './recipe-creation.component.css',
})
export class RecipeCreationComponent {
  uploadProgress = 0;
  counter = 0;

  recipeForm = this.fb.group({
    id: new FormControl<number | null>(null),
    title: ['', [Validators.required]],
    ingredients: this.fb.array([this.fb.control('', [Validators.required])]),
    tags: [''],
    imageUrl: [''],
    cookingTimeHours: new FormControl<number | null>(null),
    cookingTimeMinutes: new FormControl<number | null>(null),
    servings: new FormControl<number | null>(null, [Validators.required]),
    prepTimeHours: new FormControl<number | null>(null),
    prepTimeMinutes: new FormControl<number | null>(null),
    steps: this.fb.array([this.fb.control('', [Validators.required])]),
  });

  tags = recipeTags.TAGS;

  uploadedFilesSubject$ = new BehaviorSubject<File[]>([]);

  uploadRecipeImages$ = this.uploadedFilesSubject$.pipe(
    switchMap((uploadedFiles) =>
      forkJoin([
        uploadedFiles.map((file: File) => {
          if (this.recipeForm.value.id)
            return this.uploadService.upload(
              this.recipeForm.value.id.toString(),
              file
            );
          else return of(null);
        }),
      ]).pipe(
        catchError((errors) => of(errors)),
        finalize(() =>
          this.calculateProgressPercentage(++this.counter, uploadedFiles.length)
        )
      )
    )
  );

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps() {
    return this.recipeForm.get('steps') as FormArray;
  }

  // valueChange$ = this.recipeForm.valueChanges.pipe(
  //   concatMap((formValue) =>
  //     this.recipeService.saveRecipe(formValue as Recipe)
  //   ),
  //   catchError((errors) => of(errors)),
  //   tap(() => this.saveSuccess())
  // );

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipesService,
    private uploadService: UploadRecipesPreviewService
  ) {}

  addIngredient(): void {
    this.ingredients.push(this.fb.control('', [Validators.required]));
  }

  addSteps(): void {
    this.steps.push(this.fb.control('', [Validators.required]));
  }

  onSave(form: FormGroup): void {
    this.recipeService
      .saveRecipe(this.handleFromFormToRecipe(form))
      .pipe(
        tap((recipe) => console.log(recipe)),
        catchError((errors) => of(errors)),
        tap(() => this.saveSuccess())
      )
      .subscribe((recipe) => console.log(recipe));
  }

  handleFromFormToRecipe({ value }: FormGroup): Recipe {
    return {
      title: value.title,
      ingredients: value.ingredients,
      prepTime: `${value.prepTimeHours ?? 0}:${value.prepTimeMinutes ?? 0}`,
      cookTime: `${value.cookingTimeHours ?? 0}:${
        value.cookingTimeMinutes ?? 0
      }`,
      servings: value.servings,
      steps: value.steps,
    };
  }

  saveSuccess(): void {
    console.log('Saved successfully');
  }

  onUpload(files: File[]): void {
    this.uploadedFilesSubject$.next(files);
  }

  private calculateProgressPercentage(
    completedRequests: number,
    totalRequests: number
  ): void {
    this.uploadProgress = (completedRequests / totalRequests) * 100;
  }
}
