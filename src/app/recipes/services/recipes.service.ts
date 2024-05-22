import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_PATH = environment.BASE_PATH;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);

  constructor(private http: HttpClient) {}
}
