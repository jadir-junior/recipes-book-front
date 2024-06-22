import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, ToolbarModule, RouterLink],
  template: `
    <p-toolbar>
      <div>
        <a routerLink="/" class="logo">
          Perfect<span class="logo-recipe">Recipe</span>
        </a>
      </div>
      <div>
        <p-button
          routerLink="recipes/create"
          label="My Recipes"
          [link]="true"
        ></p-button>
        <p-button
          routerLink="recipes/create"
          label="My Favourites"
          [link]="true"
        ></p-button>
        <p-button
          routerLink="recipes/create"
          label="New Recipe"
          [link]="true"
        ></p-button>
        <i
          class="pi pi-user"
          style="font-size: 1..3rem; color: #FFF; margin-bottom: 12px; margin-left: 40px;"
        ></i>
      </div>
      <div class="flex gap-2">
        <p-button
          label="Log in"
          severity="secondary"
          [style]="{ width: '100px' }"
        ></p-button>
        <p-button label="Sign up"></p-button>
      </div>
    </p-toolbar>
  `,
  styles: [
    `
      .logo {
        font-size: 22px;
        font-weight: bold;
      }

      .logo .logo-recipe {
        color: var(--primary-color);
      }
    `,
  ],
})
export class HeaderComponent {}
