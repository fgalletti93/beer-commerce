import React from "react";
import useFetchBeers from "./hooks/useFetchBeers";
import CustomSearch from "./CustomSearch/CustomSearch";
import BeerList from "./BeerList/BeerList";
import Beer from "./BeerPage/BeerPage";
import "./styles/style.scss";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { searchResults, onSearchParamSubmit } = useFetchBeers();

  return (
    <div>
      <CustomSearch onCustomParamSubmit={onSearchParamSubmit} />
      <Routes>
        <Route path="/" element={<BeerList beers={searchResults} />} />
        <Route path={`/beers/:id`} element={<Beer />} />
      </Routes>
    </div>
  );
};

export default App;
