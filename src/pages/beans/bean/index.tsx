import {getCurrentBeans} from "../../../api";
import {useQuery} from "@tanstack/react-query";
import {Preloader} from "../../../components/preloader";

export const BeanPage = () => {

  const href = window.location.href.split("/");

  const hrefId = href[href.length - 1];

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["bean", hrefId],
    queryFn: () => getCurrentBeans(hrefId),
  });

  return isLoading ? (<Preloader/>) : isSuccess && (
    <div className={"h-full p-5 shadow-xl text-red-500 md:w-2/4 w-11/12 bg-white rounded-xl mt-10"}>
      <div className={"flex md:flex-row flex-col"}>
        <img className={"h-56"} src={data.imageUrl} alt=""/>
        <div>
          <h1 className={"font-bold text-2xl"}>
            {data.flavorName}
          </h1>
          <span className={"text-xl"}>
            {data.description}
          </span>
        </div>
      </div>
      <div className={"py-10 border-orange-500 border-t"}>
        <div>Group
          name: {data.groupName.map((item, index) => index === data.groupName.length - 1 ? item + "." : item + ", ")}</div>
        <div
          className={"mt-5"}>Ingredients: {data.ingredients.map((item, index) =>
          index === data.ingredients.length - 1 ? item + "." : item + ", ")}</div>
      </div>
      <div className={"py-10 border-orange-500 border-t"}>
        <div>Hexadecimal Color: {data.backgroundColor}</div>
        <div>Color Group: {data.colorGroup}</div>
      </div>
      <div className={"flex flex-row border-orange-500 py-10 border-t"}>
        <div className={"mr-5"}>Seasonal: {data.seasonal ? "Yes" : "No."}</div>
        <div className={"mr-5"}>Kosher: {data.kosher ? "Yes" : "No."}</div>
        <div>Gluten Free: {data.glutenFree ? "Yes." : "No."}</div>
      </div>
    </div>
  );

};