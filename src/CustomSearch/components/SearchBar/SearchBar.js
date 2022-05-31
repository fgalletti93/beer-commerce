import React, {useState} from "react";
import SearchBarButton from "./SearchBarButton";

const SearchBar = (props) => {
  const[beerName, setBeerName] = useState([""])



  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Beer: </label>
          <input
            type="text"
            value={beerName}
            onChange={(e) => setBeerName(e.target.value)}
          />
          <SearchBarButton />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
