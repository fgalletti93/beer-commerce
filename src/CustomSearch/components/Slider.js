import React, { useState } from "react";

const Slider = ({ onSliderChange, min, max, title }) => {
  const [range, setRange] = useState(min);

  const handleOnChange = (e) => {
    setRange(e.target.value);
    onSliderChange(e.target.value);
  };

  return (
    <div className="horizontal-slider">
      <label htmlFor={`horizontal-slider ${title}`}>{title}</label>
      <input
        id={`horizontal-slider ${title}`}
        type="range"
        min={min}
        max={max}
        value={range}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Slider;
