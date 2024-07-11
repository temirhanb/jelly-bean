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

export interface IBeansRequest{
  pageSize: number,
  currentPage: number,
  items: IBeansItem[],
  totalCount: number,
  totalPages: number
}