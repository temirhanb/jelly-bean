import axios from "axios";
import {API} from "../../../shared/constants";
import {IBeansRequest} from "../../../shared/types/beans";

export const getAllBeans = async ({pageParam}: { pageParam: number }): Promise<IBeansRequest> => {

  const {data} = await axios.get(API + `beans?pageIndex=${pageParam}&pageSize=10`);

  return {
    items: data.items,
    currentPage: data.currentPage,
    pageSize: data.pageSize,
    totalCount: data.totalCount,
    totalPages: data.totalPages,
  };
};