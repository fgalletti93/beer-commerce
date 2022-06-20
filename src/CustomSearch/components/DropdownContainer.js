import React, { useState } from "react";

const DropdownContainer = () => {
  const [list, setList] = useState(["A-Z", "Low to High", "High to Low"]);

  return (
    <div className="dropdown-container">
      <select onChange={(e) => setList([e.target.value])}>
        {list.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownContainer;
