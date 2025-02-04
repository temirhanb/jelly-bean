import React from "react";
import {Link} from "react-router-dom";
import {ICombinationItem} from "../../../shared/types";

interface IProps {
  item: ICombinationItem;
}

export const CartCombination: React.FC<IProps> = ({item}) => {

  return (
    <div
      className={"flex bg-white md:bg-inherit border-red-500 border items-start flex-col hover:bg-white hover:drop-shadow-lg m-2 p-5 text-red-500 rounded-lg"}>
      <Link to={`/combinations/${item.combinationId}`}>
        <h1 className={"font-bold mb-2 hover:text-red-300"}>{item.name}</h1>
      </Link>
      <span>{item.tag.map(item => item + " ")}</span>
    </div>
  );
};