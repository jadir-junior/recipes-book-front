import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, catchError, of } from 'rxjs';

const BASE_PATH = environment.BASE_PATH;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.http
    .get<Recipe[]>(`${BASE_PATH}/recipes`)
    .pipe(catchError((error) => of([])));

  private filterRecipeSubject = new BehaviorSubject<Partial<Recipe>>({
    title: '',
  });
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateFilter(criteria: Partial<Recipe>): void {
    this.filterRecipeSubject.next(criteria);
  }
}
