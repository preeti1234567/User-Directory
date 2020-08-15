import React from "react";

const Dropdown = (props) => {
  return (
    <select id="category" name="category" onChange={props.changeHandlerCategory}>
      {props.categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  );
};

export default Dropdown;
