import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, ToolbarModule],
  template: `
    <p-toolbar>
      <div>
        <p-button routerLink="" label="Recipes Book" [link]="true"></p-button>
        <!-- <img [src]="'assets/recipes/chef.png'" alt="logo" /> -->
      </div>
      <div>
        <p-button
          routerLink="recipes/create"
          label="My recipes"
          [link]="true"
        ></p-button>
        <p-button
          routerLink="recipes/create"
          label="My favourites"
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
    </p-toolbar>
  `,
})
export class HeaderComponent {}
