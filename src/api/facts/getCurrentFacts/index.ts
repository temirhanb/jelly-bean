import axios from "axios";
import {API} from "../../../shared/constants";
import {IFactsItem} from "../../../shared/types";

export const getCurrentFacts = async (hrefId: string): Promise<IFactsItem> => {
  const {data} = await axios.get(API + `facts/${hrefId}`);
  return data;
};