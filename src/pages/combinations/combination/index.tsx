import {useQuery} from "@tanstack/react-query";
import {Preloader} from "../../../components/preloader";
import {getCurrentCombinations} from "../../../api/combinations";

export const CombinationPage = () => {

  const href = window.location.href.split("/");

  const hrefId = href[href.length - 1];

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["bean", hrefId],
    queryFn: () => getCurrentCombinations(hrefId),
  });

  return isLoading ? (<Preloader/>) : isSuccess && (
    <div className={"h-full p-5 text-red-500 w-2/4"}>
      <div className={'flex flex-col'}>
        <span className={'font bold text-2xl'}>{data.name}</span>
        <span className={'text-xl mt-5'}>{data.tag.map((item)=> item + ' ')}</span>
      </div>
    </div>
  );

};