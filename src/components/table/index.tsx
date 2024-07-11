import React from "react";
import {CartBean} from "../carts";
import {IBeansItem} from "../../shared/types/beans";

interface IProps {
  data: IBeansItem[] | [];
}

export const Table: React.FC<IProps> = ({data}) => {
  return (
    <div className={"grid grid-cols-2 gap-4"}>
      {data.map((item) => <CartBean  key={item.beanId} item={item}/>)}
    </div>
  );
};