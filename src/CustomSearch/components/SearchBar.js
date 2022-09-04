import React, { useState } from "react";
import Button from "./Button";
import "./styles/SearchBar.scss";
import clearIcon from "../../assets/clear-symbol-removebg-preview.png";
import searchIcon from "../../assets/search-removebg-preview.png";

const SearchBar = ({ onTermSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleSubmit = (e) => {
    setIsSearch(true);
    e.preventDefault();
    onTermSubmit(searchText);
  };

  const handleClearSearch = () => {
    setIsSearch(false)
    setSearchText("");
    onTermSubmit("");
  };

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
          {isSearch && <Button icon={clearIcon} onClick={handleClearSearch}/>}
          {!isSearch && <Button icon={searchIcon} onClick={handleSubmit}/>}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
