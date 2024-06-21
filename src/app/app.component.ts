import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: ` <div>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  constructor(private primeConfig: PrimeNGConfig) {
    this.primeConfig.ripple = true;
  }
}
