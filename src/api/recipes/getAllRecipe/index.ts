import axios from "axios";
import {API} from "../../../shared/constants";
import {IRecipeRequest} from "../../../shared/types/recipe";

export const getAllRecipe = async ({pageParam}: { pageParam: number }): Promise<IRecipeRequest> => {

  const {data} = await axios.get(API + `recipes?pageIndex=${pageParam}&pageSize=10`);

  return {
    items: data.items,
    currentPage: data.currentPage,
    pageSize: data.pageSize,
    totalCount: data.totalCount,
    totalPages: data.totalPages,
  };
};