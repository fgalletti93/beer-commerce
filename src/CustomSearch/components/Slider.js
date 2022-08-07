import React, { useState } from "react";

const Slider = (props) => {
  const [range, setRange] = useState(props.min);

  const handleOnChange = (e) => {
    setRange(e.target.value);
    props.onSliderChange(e.target.value);
  };

  return (
    <div className="horizontal-slider">
      <label htmlFor={`horizontal-slider ${props.title}`}>{props.title}</label>
      <input
        id={`horizontal-slider ${props.title}`}
        type="range"
        min={props.min}
        max={props.max}
        value={range}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Slider;
