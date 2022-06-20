import React from "react";
import DropdownContainer from "./components/DropdownContainer";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";
import './style.scss'

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
    <div className="custom-search">
      <SearchBar onTermSubmit={event => handleBeerName(event)}
      />
      <Slider //onSliderChange={props.onSliderChange}
      />
      <Slider />
      <DropdownContainer />
    </div>
  );
};

export default CustomSearch;
