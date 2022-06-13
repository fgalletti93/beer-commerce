import React, { useState } from "react";

const Slider = () => {
  const [range, setRange] = useState(50);
  console.log(range);

  const handleOnChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="slider">
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
