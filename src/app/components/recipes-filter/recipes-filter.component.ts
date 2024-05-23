import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.css',
})
export class RecipesFilterComponent {
  recipeForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  clearFilter(): void {}

  filterResults(): void {}
}
