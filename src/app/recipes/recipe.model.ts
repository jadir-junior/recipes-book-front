export interface Recipe {
  id?: number;
  title: string;
  ingredients: string[];
  imageUrl?: string;
  cookTime: string;
  prepTime: string;
  steps: string[];
  servings: number;
}
