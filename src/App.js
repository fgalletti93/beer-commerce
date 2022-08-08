import React, { useState, useEffect } from "react";
import { getBeers, getBeersByCustomSearch } from "./api/api";
import CustomSearch from "./CustomSearch/CustomSearch";
import ImageList from "./ImageList/ImageList";
import "./styles/style.scss";
import {orderBy} from "./utils/OrderBy";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onTermSubmit = (term) => {
    getBeersByCustomSearch(term)
    .then((response) => response.json())
    .then((data) => {
      const results = orderBy(data, term.order)
      setSearchResults(results)
    }); 
  };

  useEffect(() => {
    getBeers()
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []); //custom hook that englobes search results

  return (
    <div>
      <CustomSearch
        onCustomParamSubmit={onTermSubmit}
      />
      <ImageList beers={searchResults} />
    </div>
  );
};

export default App;
