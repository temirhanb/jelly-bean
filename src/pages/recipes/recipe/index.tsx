import {useQuery} from "@tanstack/react-query";
import {Preloader} from "../../../components/preloader";
import {getCurrentRecipe} from "../../../api";

export const RecipePage = () => {

  const href = window.location.href.split("/");

  const hrefId = href[href.length - 1];

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["recipe", hrefId],
    queryFn: () => getCurrentRecipe(hrefId),
  });

  return isLoading ? (<Preloader/>) : isSuccess && (
    <div className={"h-full p-5 shadow-xl text-red-500 md:w-3/4 w-11/12  bg-white rounded-xl mt-10"}>
      <div className={"flex md:flex-row flex-col"}>
        <img className={"h-56 rounded-xl mr-5"} src={data.imageUrl} alt=""/>
        <div>
          <h1 className={"font-bold text-2xl"}>
            {data.name}
          </h1>
          <span className={"text-xl"}>
            {data.description}
          </span>
        </div>
      </div>
      <div className={"py-10 mt-5 border-orange-500 border-t"}>
        <div className={"flex flex-wrap items-center"}>
          <h1 className={"font-bold"}>Ingredients:</h1>
          <span>
            {data.ingredients.map((item, index) => index === data.ingredients.length - 1 ? item + "." : item + ", ")}
          </span>
        </div>
        <div className={"flex flex-wrap mt-5 items-center"}>
          <h1 className={"font-bold"}>Tips:</h1>
          <span>
            {data.tips.map((item, index) => index === data.tips.length - 1 ? item + "." : item + ", ")}
          </span>
        </div>
        <div className={"flex flex-wrap mt-5 items-center"}>
          <h1 className={"font-bold"}>Directions:</h1>
          <span>
            {data.directions.map((item, index) => index === data.directions.length - 1 ? item + "." : item + ", ")}
          </span>
        </div>
      </div>
      <div className={"py-10 grid grid-cols-2 gap-4 border-orange-500 border-t"}>
        <div className={"flex flex-wrap items-center"}>
          <h1 className={"font-bold"}>Additions:</h1>
          <span>
            {data?.additions1.length !== 0 && data?.additions1.map((item, index) => index === data?.additions1.length - 1 ? item + "." : item + ", ")}
            {data?.additions2.length !== 0 && data?.additions2.map((item, index) => index === data?.additions2.length - 1 ? item + "." : item + ", ")}
            {data?.additions2.length !== 0 && data?.additions3.map((item, index) => index === data?.additions3.length - 1 ? item + "." : item + ", ")}
          </span>
        </div>
      </div>
      <div className={"py-10 grid grid-cols-2 gap-4 border-orange-500 border-t"}>
        <div className={"flex flex-wrap items-center"}>
          <h1 className={"font-bold mr-2"}>Cook time: </h1>
          <span>{data.cookTime}.</span>
        </div>
        <div className={"flex flex-wrap items-center"}>
          <h1 className={"font-bold mr-2"}>Total time: </h1>
          <span>{data.totalTime}.</span>
        </div>
        <div className={"flex flex-wrap items-center"}>
          <h1 className={"font-bold mr-2"}>Prep time: </h1>
          <span>{data?.prepTime}.</span>
        </div>
        <div className={"flex flex-wrap items-center"}>
          <h1 className={"font-bold mr-2"}>Making amount: </h1>
          <span>{data.makingAmount}.</span>
        </div>
      </div>
    </div>
  );

};