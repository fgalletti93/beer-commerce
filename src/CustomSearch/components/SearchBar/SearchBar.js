import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTermSubmit(searchText)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Beer: </label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
