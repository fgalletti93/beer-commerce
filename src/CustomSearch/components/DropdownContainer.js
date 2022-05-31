import React from "react";

const DropdownContainer = () => {

  return (
    <div>
      <button className="dropdown-button">
        <span>Sort by:</span>
        <ul>
        </ul>
      </button>
    </div>
  );
};

export default DropdownContainer;

// const [list, setList] = useState([
//   "A-Z", 
//   "Low to High", 
//   "High to Low"
// ]);


         //{list.map((item, key) => {
           // return <li key={key}>{item}</li>
         // })}