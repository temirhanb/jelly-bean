import {useQuery} from "@tanstack/react-query";
import {Preloader} from "../../../components/preloader";
import {getCurrentFacts} from "../../../api/facts/getCurrentFacts";

export const FactPage = () => {

  const href = window.location.href.split("/");

  const hrefId = href[href.length - 1];

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["fact", hrefId],
    queryFn: () => getCurrentFacts(hrefId),
  });

  return isLoading ? (<Preloader/>) : isSuccess && (
    <div className={"h-full p-5 mt-10 text-red-500 w-2/4 rounded-xl bg-white"}>
      <div className={"flex flex-col"}>
        <span className={"font-bold text-2xl"}>{data?.title}</span>
        <span className={"text-xl mt-5"}>{data?.description}</span>
      </div>
    </div>
  );

};