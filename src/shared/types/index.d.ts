export interface IBeansItem {
  backgroundColor: string;
  beanId: number;
  colorGroup: string;
  description: string;
  flavorName: string;
  glutenFree: boolean;
  groupName: Array<string>;
  imageUrl: string;
  ingredients: Array<string>;
  kosher: boolean;
  seasonal: boolean;
  sugarFree: boolean;
}

export interface IBeansRequest {
  pageSize: number,
  currentPage: number,
  items: IBeansItem[],
  totalCount: number,
  totalPages: number
}

export interface ICombinationItem {
  name: string;
  combinationId: number;
  tag: Array<string>;
}

export interface ICombinationRequest {
  pageSize: number,
  currentPage: number,
  items: ICombinationItem[],
  totalCount: number,
  totalPages: number
}

export interface IFactsItem {
  description: string;
  factId: number;
  title: string;
}

export interface IFactsRequest {
  pageSize: number,
  currentPage: number,
  items: IFactsItem[],
  totalCount: number,
  totalPages: number
}

export interface IHistoryItem {
  description: string;
  year: number;
  mileStoneId: number;
}

export interface IHistoryRequest {
  pageSize: number,
  currentPage: number,
  items: IHistoryItem[],
  totalCount: number,
  totalPages: number
}

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