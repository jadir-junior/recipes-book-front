import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFilterComponent } from './recipes-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipesFilterComponent', () => {
  let component: RecipesFilterComponent;
  let fixture: ComponentFixture<RecipesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesFilterComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
