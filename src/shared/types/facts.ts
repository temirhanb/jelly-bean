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