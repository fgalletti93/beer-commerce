import React from "react";
import useFetchBeers from "./hooks/useFetchBeers";
import CustomSearch from "./CustomSearch/CustomSearch";
import ImageList from "./ImageList/ImageList";
import "./styles/style.scss";

const App = () => {
  const { searchResults, onSearchParamSubmit } = useFetchBeers();

  return (
    <div>
      <CustomSearch onCustomParamSubmit={onSearchParamSubmit} />
      <ImageList beers={searchResults} />
    </div>
  );
};

export default App;
