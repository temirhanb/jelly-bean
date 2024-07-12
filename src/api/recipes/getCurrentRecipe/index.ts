import axios from "axios";
import {API} from "../../../shared/constants";
import {IRecipeItem} from "../../../shared/types";

export const getCurrentRecipe = async (hrefId: string): Promise<IRecipeItem> => {
  const {data} = await axios.get(API + `recipes/${hrefId}`);
  return data;
};