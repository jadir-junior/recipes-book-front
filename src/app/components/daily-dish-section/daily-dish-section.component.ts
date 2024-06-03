import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-daily-dish-section',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <section>
      <div class="grid">
        <div class="col">
          <h1>
            Your Daily Dish <br />
            A <span class="food">Food</span> Journey
          </h1>
          <p class="text-section">
            Embark on a Culinary Adventure: Uncovering Hidden Gems, Global
            Flavors, and Local Favorites, One Mouthwatering Dish at a Time
          </p>
          <p-button label="Sign up"></p-button>
        </div>
        <div class="col"></div>
      </div>
    </section>
  `,
  styles: `
    h1 {
      font-size: 40px;
    }

    .food {
      color: var(--primary-color);
    }

    .text-section {
      color: var(--text-gray-dark );
    }
  `,
})
export class DailyDishSectionComponent {}
