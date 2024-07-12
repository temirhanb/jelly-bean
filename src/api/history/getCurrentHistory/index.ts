import axios from "axios";
import {API} from "../../../shared/constants";
import {IHistoryItem} from "../../../shared/types";

export const getCurrentHistory = async (hrefId: string): Promise<IHistoryItem> => {
  const {data} = await axios.get(API + `mileStones/${hrefId}`);
  return data;
};