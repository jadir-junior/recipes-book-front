import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  catchError,
  of,
  share,
} from 'rxjs';
import { Recipe } from '../recipe.model';

const BASE_PATH = environment.BASE_PATH;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.getRecipesList();

  private filterRecipeSubject = new BehaviorSubject<Partial<Recipe>>({
    title: '',
  });
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) {}

  getRecipesList(): Observable<Recipe[]> {
    if (!this.recipes$) {
      return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`).pipe(
        share({
          connector: () => new ReplaySubject(),
          resetOnRefCountZero: true,
          resetOnComplete: true,
          resetOnError: true,
        }),
        catchError(() => of([]))
      );
    }

    return this.recipes$;
  }

  updateFilter(criteria: Partial<Recipe>): void {
    this.filterRecipeSubject.next(criteria);
  }

  saveRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${BASE_PATH}/recipes`, recipe);
  }
}
