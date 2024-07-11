import axios from "axios";
import {API} from "../../../shared/constants";
import {IBeansItem} from "../../../shared/types/beans";

export const getCurrentBeans = async (hrefId: string):Promise<IBeansItem> => {
  const {data} = await axios.get(API + `beans/${hrefId}`);
  return data;
};