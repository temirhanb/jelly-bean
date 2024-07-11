import React from "react";
import {Route, Routes,} from "react-router-dom";
import {Header} from "./components";
import {BeansPage, CombinationPage, FactsPage, HistoryPage, RecipesPage} from "./pages";
import {NotFoundPage} from "./pages/notFound";

export const App: React.FC = () => {

  return (
    <div className={"flex bg-orange-50 items-center justify-center"}>
      <Routes>
        <Route path={"/"} element={<Header/>}>
          <Route path={"/beans"} element={<BeansPage/>}/>
          <Route path={"/combinations"} element={<CombinationPage/>}/>
          <Route path={"/facts"} element={<FactsPage/>}/>
          <Route path={"/recipes"} element={<RecipesPage/>}/>
          <Route path={"/history"} element={<HistoryPage/>}/>
          <Route path={"/*"} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};