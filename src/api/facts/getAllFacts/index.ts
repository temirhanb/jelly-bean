import axios from "axios";
import {API} from "../../../shared/constants";
import {IFactsRequest} from "../../../shared/types";

export const getAllFacts = async ({pageParam}: { pageParam: number }): Promise<IFactsRequest> => {

  const {data} = await axios.get(API + `facts?pageIndex=${pageParam}&pageSize=10`);

  return {
    items: data.items,
    currentPage: data.currentPage,
    pageSize: data.pageSize,
    totalCount: data.totalCount,
    totalPages: data.totalPages,
  };
};