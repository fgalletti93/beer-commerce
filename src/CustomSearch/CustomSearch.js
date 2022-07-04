import React, {useMemo} from "react";
import DropdownContainer from "./components/DropdownContainer";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";
import './style.scss'

const CustomSearch = (props) => {

  const searchParams = useMemo(() => {
    return {};
  }, []);

  const handleBeerName = (term) => {
    searchParams.beer_name = term
    props.onCustomParamSubmit(searchParams)
  }

  const handleAbvSlider = (range) => {
    searchParams.abv_lt = range
    props.onCustomParamSubmit(searchParams)
  }

  const handleIbuSlider = (range) => {
    searchParams.ibu_lt = range
    props.onCustomParamSubmit(searchParams)
  }
  

  return (
    <div className="custom-search">
      <SearchBar onTermSubmit={event => handleBeerName(event)} />
      <div className="search-details">
      <Slider title={"ABV"} min={3} max={10} onSliderChange={handleAbvSlider}
      />
      <Slider title={"IBU"} min={0} max={140} onSliderChange={handleIbuSlider}/>
      <DropdownContainer onOrderSelect={props.onOrderedSearch}/>
      </div>
    </div>
  );
};

export default CustomSearch;
