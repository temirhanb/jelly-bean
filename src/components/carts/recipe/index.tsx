import React from "react";
import {Link} from "react-router-dom";
import {IRecipeItem} from "../../../shared/types/recipe";

interface IProps {
  item: IRecipeItem;
}

export const CartRecipe: React.FC<IProps> = ({item}) => {

  return (
    <div className={"flex items-center flex-col hover:bg-white hover:drop-shadow-lg m-2 p-5 text-red-500 rounded-lg"}>
      <div className={"mb-2"}>
        <img className={"h-32 rounded-xl"} src={item.imageUrl} alt=""/>
      </div>
      <Link to={`/recipes/${item.recipeId}`}>
        <h1 className={"font-bold mb-2 hover:text-red-300"}>{item.name}</h1>
      </Link>
      <span>{item.description}</span>
    </div>
  );
};