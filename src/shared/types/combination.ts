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