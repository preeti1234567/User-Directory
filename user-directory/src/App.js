import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import db from "./employee.json";
import "./App.css";

  const changeHandler = (event) =>
  {    
    setSearchText(event.target.value.toLowerCase())
  }
  const changeHandlerCategory = (event) =>
  {    
     setcategory(event.target.value);
  }

  const changeHandlerCategoryOrder = (event) =>
  {
    setorderbycategory(event.target.value);
  }

  const changeHandlerOrderBy = (event) =>
  {
    setorderby(event.target.value);
  }
  
  const searchClickHandler = (event) => {    
    setEmployees(getEmployeeData());
  };

  

  const content = (
    <div className="App">
      <div className="card text-white bg-primary mb-3">
        <h1 className="App-title">Employee Directory</h1>
      </div>
      <SearchBar search={searchClickHandler} changeHandler={changeHandler} categories={categories} changeHandlerCategory={changeHandlerCategory} changeHandlerOrderBy={changeHandlerOrderBy} changeHandlerCategoryOrder={changeHandlerCategoryOrder} order={order} orderBy={orderBy}/>
      <Wrapper searchText={searchText} result={employees} />
    </div>
  );
  return content;
};

export default App;
