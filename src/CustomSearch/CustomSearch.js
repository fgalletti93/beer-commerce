import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import DropdownContainer from "./components/DropdownContainer";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";
import "./style.scss";

const CustomSearch = ({ onCustomParamSubmit }) => {
  const searchParams = useMemo(() => {
    return { order: "A-Z" };
  }, []);

  const handleBeerName = (term) => {
    searchParams.beer_name = term;
    onCustomParamSubmit(searchParams);
  };

  const handleAbvSlider = (range) => {
    searchParams.abv_lt = range;
    onCustomParamSubmit(searchParams);
  };

  const handleIbuSlider = (range) => {
    searchParams.ibu_lt = range;
    onCustomParamSubmit(searchParams);
  };

  const handleOrderBy = (option) => {
    searchParams.order = option;
    onCustomParamSubmit(searchParams);
  };

  return (
    <div className="custom-search">
      <h1 className="title">
        <Link to={'/'} className="title-link">
          Beer <br /> Website.
        </Link>
      </h1>
      <SearchBar onTermSubmit={(event) => handleBeerName(event)} />
      <div className="search-details">
        <div className="sliders">
          <Slider
            title={"ABV"}
            min={0}
            max={15}
            onSliderChange={handleAbvSlider}
          />
          <Slider
            title={"IBU"}
            min={0}
            max={140}
            onSliderChange={handleIbuSlider}
          />
        </div>
        <DropdownContainer onOrderSelect={handleOrderBy} />
      </div>
    </div>
  );
};

export default CustomSearch;
