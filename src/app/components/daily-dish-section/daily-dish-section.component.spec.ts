import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDishSectionComponent } from './daily-dish-section.component';

describe('DailyDishSectionComponent', () => {
  let component: DailyDishSectionComponent;
  let fixture: ComponentFixture<DailyDishSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyDishSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyDishSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
