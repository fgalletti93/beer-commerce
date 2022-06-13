import React from "react";
import DropdownContainer from "./components/DropdownContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Slider from "./components/Slider";

const CustomSearch = (props) => {

  //função intermediaria para não chamar props diretamente 

  //configurar cada slider com min e max range e passar para o componente slider.js
  return (
    <div>
      <SearchBar onTermSubmit={props.onTermSubmit}/>
      <Slider />
      <Slider />
      <DropdownContainer />
    </div>
  );
};

export default CustomSearch;
