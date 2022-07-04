import React from "react";

const DropdownContainer = (props) => {
  const list = ["Order by:", "A-Z", "Z-A", "Low to High ABV", "High to Low ABV", "Low to High IBU", "High to Low IBU"];

  const onOrderSelect = (e) => {
    props.onOrderSelect(e.target.value)
  }


  return (
    <div className="dropdown-container">
      <select onChange={onOrderSelect}>
        {list.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownContainer;
