import React, {useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useInView} from "react-intersection-observer";
import {Preloader} from "../../components/preloader";
import {getAllHistory} from "../../api";
import {CartHistory} from "../../components/carts/history";
import {EStatus} from "../../shared/enums";
import {NotFoundPage} from "../notFound";

export const HistoryPage: React.FC = () => {

  const {data, status, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["history"],
    queryFn: getAllHistory,
    initialPageParam: 1,
    getNextPageParam: ({currentPage, totalPages}) => {
      const nextPage: number = currentPage + 1;
      return currentPage <= totalPages ? nextPage : undefined;
    }
  });
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return status === EStatus.PENDING
    ? (
      <Preloader/>
    )
    : status === EStatus.ERROR
      ? (<NotFoundPage/>)
      : (
        <div>
          {data.pages.map((group) => (
            <div className={"mt-5 mx-auto md:w-2/3 w-11/12"}>
              <div className={"grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-2"}>
                {group.items.map((item) => <CartHistory key={item.mileStoneId} item={item}/>)}
              </div>
            </div>
          ))}
          {isFetchingNextPage && (<div className={"relative flex items-center justify-center"}><Preloader/></div>)}
          <div ref={ref}/>
        </div>
      );
};