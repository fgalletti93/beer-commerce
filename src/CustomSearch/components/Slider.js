import React, { useState } from "react";

const Slider = (props) => {
  const [range, setRange] = useState(props.min);

  const handleOnChange = (e) => {
    setRange(e.target.value);
    props.onSliderChange(e.target.value)
  };

  return (
    <div className="horizontal-slider">
      {props.title}
      <input
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
