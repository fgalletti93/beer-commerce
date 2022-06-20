import React, { useState } from "react";

const Slider = (props) => {
  const [range, setRange] = useState(100);

  const handleOnChange = (e) => {
    setRange(e.target.value);
    console.log(range)
  };

  return (
    <div className="horizontal-slider">
      <input
        type="range"
        min={0}
        max={100} //info dinamico passado por props
        value={range}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Slider;
