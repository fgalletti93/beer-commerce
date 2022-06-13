import React, {useState} from "react";

const DropdownContainer = () => {
  const [list, setList] = useState(["A-Z", "Low to High", "High to Low"]); 
  //preciso atualizar o estado da pagina com o item selecionado, mas sem alterar o estado do dropdown em si como esta acontecendo agora. 

  return (
    <div>
      <select /*value={list}*/ onChange={(e) => setList([e.target.value])}>
          {list.map((item) => {
            return <option>{item}</option>;
          })}
      </select>
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
