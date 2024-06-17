import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RecipesService } from '../services/recipes.service';
import { UploadRecipesPreviewService } from '../../core/services/upload-recipes-preview.service';
import { RecipeCreationComponent } from './recipe-creation.component';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserEvent } from '../../utils/testing/testing-utils';

describe('RecipeCreationComponent', () => {
  let recipeService: jest.Mocked<RecipesService>;
  let uploadService: jest.Mocked<UploadRecipesPreviewService>;
  let debugP: any;

  beforeEach(async () => {
    recipeService = {
      saveRecipe: jest.fn(),
    } as unknown as jest.Mocked<RecipesService>;

    uploadService = {
      upload: jest.fn(),
    } as unknown as jest.Mocked<UploadRecipesPreviewService>;

    const { debug } = await render(RecipeCreationComponent, {
      imports: [
        ReactiveFormsModule,
        CommonModule,
        RadioButtonModule,
        FileUploadModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: RecipesService, useValue: recipeService },
        { provide: UploadRecipesPreviewService, useValue: uploadService },
      ],
    });
    debugP = debug;
  });

  it('should create the component', () => {
    expect(screen.getByText('Create a new recipe')).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(screen.getByLabelText('title')).toHaveValue('');
    expect(screen.getByLabelText('ingredients-0')).toHaveValue('');
    expect(screen.getByLabelText('prep time hours')).toHaveValue('');
    expect(screen.getByLabelText('prep time minutes')).toHaveValue('');
    expect(screen.getByLabelText('cooking time hours')).toHaveValue('');
    expect(screen.getByLabelText('cooking time minutes')).toHaveValue('');
    // expect(screen.getByLabelText('Tags').value).toBe('');
    // expect(screen.getByLabelText('Image URL').value).toBe('');
    // expect(screen.getByLabelText('Yield').value).toBe('');
    // expect(screen.getByLabelText('Steps').value).toBe('');
  });

  it('should add a new ingredient control when addIngredient is called', async () => {
    const addButton = screen.getByLabelText('Add Ingredient');
    await userEvent.click(addButton);
    const ingredients = screen.getAllByLabelText(/ingredients-*/i);
    expect(ingredients.length).toBe(2);
  });

  it('should call onSave and log the recipe', async () => {
    jest.spyOn(console, 'log');
    const titleInput = screen.getByLabelText('title');
    const ingredientsOneInput = screen.getByLabelText('ingredients-0');

    const addButton = screen.getByLabelText('Add Ingredient');
    await userEvent.click(addButton);

    const ingredientsTwoInput = screen.getByLabelText('ingredients-1');
    const prepTimeHoursInput = screen.getByLabelText('prep time hours');
    const prepTimeMinutesInput = screen.getByLabelText('prep time minutes');
    const cookingTimeHoursInput = screen.getByLabelText('cooking time hours');
    const cookingTimeMinutesInput = screen.getByLabelText(
      'cooking time minutes'
    );
    const saveButton = screen.getByText('Save');

    await userEvent.type(titleInput, 'Test Recipe');
    await userEvent.type(ingredientsOneInput, 'Ingredient 1');
    await userEvent.type(ingredientsTwoInput, 'Ingredient 2');
    UserEvent.typeNumber(prepTimeHoursInput, 1);
    UserEvent.typeNumber(prepTimeMinutesInput, 30);
    UserEvent.typeNumber(cookingTimeHoursInput, 0);
    UserEvent.typeNumber(cookingTimeMinutesInput, 45);

    await userEvent.click(saveButton);

    expect(console.log).toHaveBeenCalledWith({
      title: 'Test Recipe',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      prepTime: '1:30',
      cookingTime: '0:45',
    });
  });

  // it('should update uploadProgress when calculateProgressPercentage is called', () => {
  //   const component = screen.getByTestId(
  //     'recipe-creation-component'
  //   ).componentInstance;
  //   component.calculateProgressPercentage(1, 4);
  //   expect(component.uploadProgress).toBe(25);
  // });

  // it('should update uploadedFilesSubject$ when onUpload is called', async () => {
  //   const fileInput = screen.getByLabelText('Upload Files');
  //   const files = [new File([], 'file1'), new File([], 'file2')];

  //   await userEvent.upload(fileInput, files);

  //   const component = screen.getByTestId(
  //     'recipe-creation-component'
  //   ).componentInstance;
  //   component.uploadedFilesSubject$.subscribe((uploadedFiles) => {
  //     expect(uploadedFiles).toEqual(files);
  //   });
  // });
});
