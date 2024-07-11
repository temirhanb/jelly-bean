import React, {useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getAllBeans} from "../../api";
import {Table} from "../../components";
import {useInView} from "react-intersection-observer";

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
    ? (<div>Loading</div>)
    : status === "error"
      ? (<div>error</div>)
      : (
        <div>
          {data.pages.map((group) => (
            <div className={"mt-5 w-2/3  bg-orange-50"}>
              <Table data={group.items}/>
            </div>
          ))}
          <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>

        </div>
      );
};