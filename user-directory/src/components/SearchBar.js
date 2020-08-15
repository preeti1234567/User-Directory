import React from "react";
import  Dropdown  from './Dropdown';

 const SearchBar = (props) => {
  return (
    <div className="container">
      <div className="input-group-prepend">
        <Dropdown categories={props.categories} changeHandlerCategory={props.changeHandlerCategory}/>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={props.changeHandler}
        ></input>
        <button onClick={props.search}>Search</button>
        <div className = "container">
          <Dropdown categories={props.categories} changeHandlerCategory={props.changeHandlerCategoryOrder}/>
        <Dropdown categories={props.orderBy} changeHandlerCategory={props.changeHandlerOrderBy}/>
        <button onClick={props.order}>Order By</button>
        </div>
        
        
      </div>
    </div>
  );
};

export default SearchBar;
