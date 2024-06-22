import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-share-your-recipes-section',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <section>
      <div class="grid">
        <div class="col flex align-items-center">
          <img
            class="max-w-30rem"
            src="https://res.cloudinary.com/dtaeisrvh/image/upload/v1719072429/photo-recipes_qoq1pi.jpg"
            alt=""
          />
        </div>
        <div
          class="col flex flex-column align-items-center justify-content-center"
        >
          <h1>Share Your <span class="text-primary">Recipes</span></h1>
          <p class="text-subtitle text-center">
            Have a favorite recipe to share? Whether it's a family heirloom, a
            unique creation, or a beloved classic, we want to hear from you!
            Submit your recipe, story, and photos to inspire our community and
            preserve culinary traditions.
          </p>
          <p-button
            label="Create New recipe"
            (onClick)="navigateToNewRecipe()"
          ></p-button>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ShareYourRecipesSectionComponent {
  router = inject(Router);

  navigateToNewRecipe(): void {
    this.router.navigate(['/recipes/create']);
  }
}
