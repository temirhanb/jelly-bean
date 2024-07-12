import axios from "axios";
import {API} from "../../../shared/constants";
import {IHistoryRequest} from "../../../shared/types";

export const getAllHistory = async ({pageParam}: { pageParam: number }): Promise<IHistoryRequest> => {

  const {data} = await axios.get(API + `mileStones?pageIndex=${pageParam}&pageSize=10`);

  return {
    items: data.items,
    currentPage: data.currentPage,
    pageSize: data.pageSize,
    totalCount: data.totalCount,
    totalPages: data.totalPages,
  };
};