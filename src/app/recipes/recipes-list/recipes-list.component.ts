import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { combineLatest, map } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    DataViewModule,
    RatingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="filtredRecipes$ | async as recipes">
      <p-dataView
        #dv
        [value]="recipes"
        [paginator]="true"
        [rows]="9"
        filterBy="name"
      >
        <!-- layout="grid" -->
        <ng-template let-recipes pTemplate="list">
          <div class="grid grid-nogutter">
            <div *ngFor="let recipe of recipes" class="col-12">
              <div class="p-col-12 p-md-3">
                <div>
                  <div>
                    <div>
                      <i class="pi pi-tag"></i>
                      <span>{{ recipe.category }}</span>
                    </div>
                  </div>
                  <div>
                    <img
                      [src]="'assets/recipes/' + recipe.imageUrl"
                      [alt]="recipe.title"
                    />
                    <div>{{ recipe?.title }}</div>
                    <div>{{ recipe?.title }}</div>
                    <p-rating
                      [ngModel]="recipe.rating"
                      [readonly]="true"
                      [cancel]="false"
                    ></p-rating>
                  </div>
                  <div>
                    <span>{{ recipe?.prepTime }} min</span>
                    <p-button icon="pi pi-heart"></p-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ng-template>
      </p-dataView>
    </div>
  `,
})
export class RecipesListComponent implements OnInit {
  recipes$ = this.recipeService.recipes$;

  filterRecipesAction$ = this.recipeService.filterRecipesAction$;

  filtredRecipes$ = combineLatest([
    this.recipes$,
    this.filterRecipesAction$,
  ]).pipe(
    map(([recipes, filter]: [Recipe[], Partial<Recipe>]) =>
      this.filterByTitle(recipes, filter)
    )
  );

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.filtredRecipes$.subscribe((recipes) => console.log(recipes));
  }

  filterByTitle(recipes: Recipe[], filter: Partial<Recipe>): Recipe[] {
    return recipes.filter(
      (recipe) =>
        recipe.title
          ?.toLowerCase()
          .indexOf(filter?.title?.toLowerCase() ?? '') != -1
    );
  }
}
