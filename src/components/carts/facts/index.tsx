import React from "react";
import {Link} from "react-router-dom";
import {IFactsItem} from "../../../shared/types";

interface IProps {
  item: IFactsItem;
}

export const CartFacts: React.FC<IProps> = ({item}) => {

  return (
    <div
      className={"flex border-red-500 border bg-white md:bg-inherit items-start flex-col hover:bg-white hover:drop-shadow-lg m-2 p-5 text-red-500 rounded-lg"}>
      <Link to={`/facts/${item.factId}`}>
        <h1 className={"font-bold mb-2 hover:text-red-300"}>{item.title}</h1>
      </Link>
      <span>{item.description}</span>
    </div>
  );
};