import React from "react";
import {Route, Routes,} from "react-router-dom";
import {Header} from "./components";
import {BeansPage, CombinationsPage, FactsPage, HistoryPage, RecipesPage} from "./pages";
import {NotFoundPage} from "./pages/notFound";
import {BeanPage} from "./pages/beans/bean";
import {CombinationPage} from "./pages/combinations/combination";

export const App: React.FC = () => {

  return (
    <div className={"flex items-center justify-center"}>
      <Routes>
        <Route path={"/"} element={<Header/>}>
          <Route path={"/beans"} element={<BeansPage/>}/>
          <Route path={"/"} element={<BeansPage/>}/>
          <Route path={"/beans/:id"} element={<BeanPage/>}/>
          <Route path={"/combinations/:id"} element={<CombinationPage/>}/>
          <Route path={"/combinations"} element={<CombinationsPage/>}/>
          <Route path={"/facts"} element={<FactsPage/>}/>
          <Route path={"/recipes"} element={<RecipesPage/>}/>
          <Route path={"/history"} element={<HistoryPage/>}/>
          <Route path={"/*"} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};