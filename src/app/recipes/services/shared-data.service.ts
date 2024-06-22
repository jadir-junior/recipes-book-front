import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedRecipeSubject = new BehaviorSubject<Recipe>({
    id: 0,
    title: '',
    ingredients: [''],
    imageUrl: '',
    servings: 0,
    steps: [''],
    cookTime: '',
    prepTime: '',
  });
  selectedRecipeAction$ = this.selectedRecipeSubject.asObservable();

  updateSelectRecipre(recipe: Recipe): void {
    this.selectedRecipeSubject.next(recipe);
  }
}
