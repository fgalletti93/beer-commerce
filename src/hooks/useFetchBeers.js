import { useState, useEffect } from "react";
import { getBeers, getBeersByCustomSearch } from "../api/api";
import { orderBy } from "../utils/OrderBy";

const useFetchBeers = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onSearchParamSubmit = (searchParam) => {
    getBeersByCustomSearch(searchParam)
      .then((response) => response.json())
      .then((data) => {
        const results = orderBy(data, searchParam.order);
        setSearchResults(results);
      });
  };

  useEffect(() => {
    getBeers()
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []);

  return {
    searchResults,
    onSearchParamSubmit,
  };
};

export default useFetchBeers;

