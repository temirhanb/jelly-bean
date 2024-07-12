import React from "react";
import {Link} from "react-router-dom";
import {IHistoryItem} from "../../../shared/types";

interface IProps {
  item: IHistoryItem;
}

export const CartHistory: React.FC<IProps> = ({item}) => {

  return (
    <div
      className={"flex bg-white md:bg-inherit border-red-500 border items-start flex-col hover:bg-white hover:drop-shadow-lg m-2 p-5 text-red-500 rounded-lg"}>
      <Link to={`/history/${item.mileStoneId}`}>
        <h1 className={"font-bold mb-2 hover:text-red-300"}>Year: {item.year}</h1>
      </Link>
      <span>{item.description}</span>
    </div>
  );
};