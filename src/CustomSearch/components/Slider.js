import React, { useState } from "react";
import "./styles/Slider.scss";

const Slider = ({ onSliderChange, min, max, title }) => {
  const [range, setRange] = useState(min);

  const handleOnChange = (e) => {
    setRange(e.target.value);
    onSliderChange(e.target.value);
  };

  return (
    <div className="horizontal-slider">
      <div className="display-value">{range}</div>
      <div className="slider-container">
        <label className="slider-title" htmlFor={`horizontal-slider ${title}`}>
          {title}
        </label>
        <input
          className="range"
          id={`horizontal-slider ${title}`}
          type="range"
          min={min}
          max={max}
          value={range}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Slider;
