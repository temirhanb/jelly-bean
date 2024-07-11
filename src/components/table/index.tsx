import React from "react";
import {IBeansItem} from "../../shared/types/beans";

interface IProps {
  data: IBeansItem[] | [];
  Component: React.FC<{ item: IBeansItem }>;
}

export const Table: React.FC<IProps> = ({data, Component}) => {
  return (
    <div className={"grid grid-cols-2 gap-4"}>
      {data.map((item) => <Component key={item.beanId} item={item}/>)}
    </div>
  );
};