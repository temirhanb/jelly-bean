import axios from "axios";
import {API} from "../../../shared/constants";

export const getCurrentBeans = async () => {
  return await axios.get(API + `beans`);
};