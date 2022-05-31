import React from "react";
import DropdownContainer from "./components/DropdownContainer";
import SearchBar from "./components/SearchBar/SearchBar"
import Slider from "./components/Slider"

const CustomSearch = () => {

  return (
      <div>
          <SearchBar />
          <Slider />
          <DropdownContainer />
      </div>
  );
};

export default CustomSearch