import React, { useState } from "react";
import './styles/SearchBar.scss'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTermSubmit(searchText);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
