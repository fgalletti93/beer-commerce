import React from "react";

const DropdownContainer = ({ onOrderSelect }) => {
  const list = [
    "A-Z",
    "Z-A",
    "Low to High ABV",
    "High to Low ABV",
    "Low to High IBU",
    "High to Low IBU",
  ];

  const onOrderSelected = (e) => {
    onOrderSelect(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select onChange={onOrderSelected}>
        <option disabled>Order by:</option>
        {list.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownContainer;
