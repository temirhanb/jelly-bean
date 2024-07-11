import React, {useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getAllBeans} from "../../api";
import {CartBean} from "../../components";
import {useInView} from "react-intersection-observer";
import {Preloader} from "../../components/preloader";

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
  return status === "pending"
    ? (
      <Preloader/>
    )
    : status === "error"
      ? (<div>error</div>)
      : (
        <div>
          {data.pages.map((group) => (
            <div className={"mt-5 mx-auto w-2/3"}>
              <div className={"grid grid-cols-2 gap-4"}>
                {group.items.map((item) => <CartBean key={item.beanId} item={item}/>)}
              </div>
            </div>
          ))}
          <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
        </div>
      );
};