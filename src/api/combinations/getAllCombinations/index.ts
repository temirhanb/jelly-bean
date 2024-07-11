import axios from "axios";
import {API} from "../../../shared/constants";
import {ICombinationRequest} from "../../../shared/types/combination";

export const getAllCombinations = async ({pageParam}: { pageParam: number }): Promise<ICombinationRequest> => {

  const {data} = await axios.get(API + `combinations?pageIndex=${pageParam}&pageSize=10`);

  return {
    items: data.items,
    currentPage: data.currentPage,
    pageSize: data.pageSize,
    totalCount: data.totalCount,
    totalPages: data.totalPages,
  };
};