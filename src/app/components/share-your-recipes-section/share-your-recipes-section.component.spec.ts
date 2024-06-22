import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareYourRecipesSectionComponent } from './share-your-recipes-section.component';

describe('ShareYourRecipesSectionComponent', () => {
  let component: ShareYourRecipesSectionComponent;
  let fixture: ComponentFixture<ShareYourRecipesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareYourRecipesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareYourRecipesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
