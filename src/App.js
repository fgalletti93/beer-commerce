import React, { useState, useEffect } from "react";
import { getBeers, getBeersByName } from "./api/api";
import CustomSearch from "./CustomSearch/CustomSearch";
import ImageList from "./ImageList/ImageList";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onTermSubmit = (term) => {
    getBeersByName(term)
    .then((response) => response.json())
    .then((data) => setSearchResults(data))
  }

  useEffect(() => {
    getBeers()
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []); //passar props do customSearch

  return (
    <div>
      <CustomSearch onTermSubmit={onTermSubmit}/>
      <ImageList beers={searchResults} />
    </div>
  );
};

export default App;
