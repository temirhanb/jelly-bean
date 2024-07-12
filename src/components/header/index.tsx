import {useId} from "react";
import {Link, Outlet,} from "react-router-dom";

export const Header = () => {
  const linkList = ["beans", "combinations", "facts", "recipes", "history"];
  const idName = useId();
  return (
    <div className={"h-auto flex flex-col flex w-full items-center"}>
      <ul className={"flex h-20 bg-orange-400  w-full flex-row justify-center items-center"}>
        {linkList.map((item, index) => (<Link key={idName + index} to={item}>
          <li
            className={"text-xl font-medium md:pr-10 pr-2 capitalize text-slate-50 hover:text-orange-100"}
          >
            {item}
          </li>
        </Link>))}
      </ul>
      <Outlet/>
    </div>
  );
};