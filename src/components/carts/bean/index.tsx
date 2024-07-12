import React from "react";
import {Link} from "react-router-dom";
import {IBeansItem} from "../../../shared/types";

interface IProps {
  item: IBeansItem;
}

export const CartBean: React.FC<IProps> = ({item}) => {

  return (
    <div
      className={"flex border-red-500 border bg-white md:bg-inherit items-center flex-col hover:bg-white hover:drop-shadow-lg m-2 p-5 text-red-500 rounded-lg"}>
      <div className={"mb-2"}>
        <img className={"h-32"} src={item.imageUrl} alt=""/>
      </div>
      <Link to={`/beans/${item.beanId}`}>
        <h1 className={"font-bold mb-2 hover:text-red-300"}>{item.flavorName}</h1>
      </Link>
      <span>{item.description}</span>
    </div>
  );
};