import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-details-page',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="selectedRecipe$ | async; let recipe">
    <span>{{ recipe.title }}</span>
  </div>`,
})
export class RecipesDetailsPageComponent {
  selectedRecipe$ = this.sharedService.selectedRecipeAction$;

  constructor(private sharedService: SharedDataService) {}
}
