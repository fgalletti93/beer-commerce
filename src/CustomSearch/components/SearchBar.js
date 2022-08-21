import React, { useState } from "react";
import "./styles/SearchBar.scss";

const SearchBar = ({ onTermSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(searchText);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Pilsens, lagers, stouts and more..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
