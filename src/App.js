import React, { useState, useEffect } from "react";
import { getBeers, getBeersByName, getBeersByQuantifiers } from "./api/api";
import CustomSearch from "./CustomSearch/CustomSearch";
import ImageList from "./ImageList/ImageList";

const App = (props) => {

  const [searchResults, setSearchResults] = useState([]);

  const onTermSubmit = (term) => {
    getBeersByName(term)
    .then((response) => response.json())
    .then((data) => setSearchResults(data))
  }

  const onSliderValueChange = (quantifier, range) => {
    getBeersByQuantifiers(quantifier, range) 
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
  }

  // const onCustomParamSubmit = (object) => {
  //   const keys = Object.keys(object) 
  //   const labels = keys.forEach(label => console.log(object[label]))
  //   return console.log(labels)
  // }


  useEffect(() => {
    getBeers('')
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []); //passar props do customSearch

  return (
    <div>
      <CustomSearch 
        //onCustomParamSubmit={onCustomParamSubmit}
        onTermSubmit={onTermSubmit} 
        onSlideChange={onSliderValueChange}
    />
      <ImageList beers={searchResults} />
    </div>
  );
};

export default App;
