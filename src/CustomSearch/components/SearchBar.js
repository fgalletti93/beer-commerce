import React, { useState } from "react";
import Button from './Button'
import "./styles/SearchBar.scss";

const SearchBar = ({ onTermSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(searchText);
  };

  const handleClearSearch = () => {
    setSearchText("")
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-input">
          <input
            type="text"
            placeholder="Pilsens, lagers, stouts and more..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button 
            onClick={handleClearSearch}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
