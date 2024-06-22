import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: ` <div class="container">
    <app-header></app-header>
    <router-outlet></router-outlet>
  </div>`,
  styles: [
    `
      .container {
        width: 1280px;
        margin: 0 auto;
      }
    `,
  ],
})
export class AppComponent {
  constructor(private primeConfig: PrimeNGConfig) {
    this.primeConfig.ripple = true;
  }
}
