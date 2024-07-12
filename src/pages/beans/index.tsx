import React, {useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getAllBeans} from "../../api";
import {CartBean} from "../../components";
import {useInView} from "react-intersection-observer";
import {Preloader} from "../../components/preloader";
import {EStatus} from "../../shared/enums";
import {NotFoundPage} from "../notFound";

export const BeansPage: React.FC = () => {

  const {data, status, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["beans"],
    queryFn: getAllBeans,
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
        <>
          {data.pages.map((group) => (
            <div className={"mt-5 md:mx-auto md:w-2/3 w-11/12"}>
              <div className={"grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-2"}>
                {group.items.map((item) => <CartBean key={item.beanId} item={item}/>)}
              </div>
            </div>
          ))}
          {isFetchingNextPage && (<div className={"relative flex items-center justify-center"}><Preloader/></div>)}
          <div ref={ref}/>
        </>
      );
};