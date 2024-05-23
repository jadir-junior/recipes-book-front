import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div>
      <div>
        <p-button routerLink="recipes/create" label="My recipes"></p-button>
        <p-button routerLink="recipes/create" label="My favourites"></p-button>
        <p-button routerLink="recipes/create" label="New Recipe"></p-button>
        <i
          class="pi pi-user"
          style="font-size: 1..3rem; color: #FFF; margin-bottom: 12px; margin-left: 40px;"
        ></i>
      </div>
      <div>
        <p-button routerLink="" label="Recipes Book"></p-button>
        <img [src]="'assets/recipes/chef.png'" alt="logo" />
      </div>
    </div>
  `,
})
export class HeaderComponent {}
