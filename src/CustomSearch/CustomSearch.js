import React from "react";
import DropdownContainer from "./components/DropdownContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Slider from "./components/Slider";

const CustomSearch = (props) => {

  const searchParams = {

  };

  const handleBeerName = (term) => {
    searchParams.beer_name = term
   // props.onCustomParamSubmit(searchParams)
    props.onTermSubmit(term);
    console.log(searchParams)
  }

  //configurar cada slider com min e max range e passar para o componente slider.js

  return (
    <div>
      <SearchBar onTermSubmit={event => handleBeerName(event)}
      />
      <Slider //onSliderChange={}
      />
      <Slider />
      <DropdownContainer />
    </div>
  );
};

export default CustomSearch;
