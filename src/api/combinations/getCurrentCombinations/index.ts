import axios from "axios";
import {API} from "../../../shared/constants";
import {ICombinationItem} from "../../../shared/types/combination";

export const getCurrentCombinations = async (hrefId: string): Promise<ICombinationItem> => {
  const {data} = await axios.get(API + `combinations/${hrefId}`);
  return data;
};