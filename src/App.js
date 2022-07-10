import React, { useState, useEffect } from "react";
import { getBeers, getBeersByCustomSearch } from "./api/api";
import CustomSearch from "./CustomSearch/CustomSearch";
import ImageList from "./ImageList/ImageList";
import "./styles/style.scss";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
 
  const onTermSubmit = (term) => {
    getBeersByCustomSearch(term)
    .then((response) => response.json())
    .then((data) => orderBy(data, term.order));
  };

  useEffect(() => {
    getBeers()
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []); //passar props do customSearch

  const orderBy = (data, option) => {
    if (option === "A-Z") {
      const alphabeticalOrder = data.sort((a, b) => {
        const beerA = a.name.toUpperCase();
        const beerB = b.name.toUpperCase();
        if (beerA < beerB) {
          return -1;
        }
        if (beerA > beerB) {
          return 1;
        }
        return 0;
      });
      setSearchResults([...alphabeticalOrder]);
    }
    if (option === "Z-A") {
      const ReverseAlphabeticalOrder = data.sort((a, b) => {
        const beerA = a.name.toUpperCase();
        const beerB = b.name.toUpperCase();
        if (beerA < beerB) {
          return 1;
        }
        if (beerA > beerB) {
          return -1;
        }
        return 0;
      });
      setSearchResults([...ReverseAlphabeticalOrder]);
    }
    if (option === "Low to High ABV") {
      const AbvLowToHigh = data.sort((a, b) => {
        return a.abv - b.abv;
      });
      setSearchResults([...AbvLowToHigh]);
    }
    if (option === "High to Low ABV") {
      const AbvHighToLow = data.sort((a, b) => {
        return b.abv - a.abv;
      });
      setSearchResults([...AbvHighToLow]);
    }
    if (option === "Low to High IBU") {
      const IbuLowToHigh = data.sort((a, b) => {
        return a.ibu - b.ibu;
      });
      setSearchResults([...IbuLowToHigh]);
    }
    if (option === "High to Low IBU") {
      const IbuHighToLow = data.sort((a, b) => {
        return b.ibu - a.ibu;
      });
      setSearchResults([...IbuHighToLow]);
    }
  };


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
