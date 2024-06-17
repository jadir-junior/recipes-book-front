import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPageComponent } from './recipes-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipesPageComponent', () => {
  let component: RecipesPageComponent;
  let fixture: ComponentFixture<RecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesPageComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
