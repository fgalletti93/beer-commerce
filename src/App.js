import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetchBeers from "./hooks/useFetchBeers";
import CustomSearch from "./CustomSearch/CustomSearch";
import BeerList from "./BeerList/BeerList";
import SelectedBeerPage from "./SelectedBeerPage/SelectedBeerPage";
import "./styles/style.scss";

const App = () => {
  const { searchResults, onSearchParamSubmit } = useFetchBeers();
  
  return (
    <div>
        <CustomSearch onCustomParamSubmit={onSearchParamSubmit} />
      <Routes>
        <Route path="/" element={<BeerList beers={searchResults} />} />
        <Route path={"/beers/:id"} element={<SelectedBeerPage />} />
      </Routes>
    </div>
  );
};

export default App;
