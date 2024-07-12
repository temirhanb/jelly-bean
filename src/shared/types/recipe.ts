export interface IRecipeItem {
  description: string;
  recipeId: number;
  cookTime: string;
  directions: Array<string>;
  imageUrl: string;
  ingredients: Array<string>;
  additions1: Array<string>;
  additions2: Array<string>;
  additions3: Array<string>;
  makingAmount: string;
  name: string;
  prepTime: string;
  tips: Array<string>;
  totalTime: string;
}

export interface IRecipeRequest {
  pageSize: number,
  currentPage: number,
  items: IRecipeItem[],
  totalCount: number,
  totalPages: number
}