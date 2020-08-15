import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import db from "./employee.json";
import "./App.css";
const App = (props) => {
  const [employees, setEmployees] = useState(db);
  const [searchText,setSearchText] = useState('');
  const [category,setcategory] = useState('First Name');
  const [orderby,setorderby] = useState('asc');
  const [orderbycategory,setorderbycategory] = useState('First Name');

  const categories = ['First Name','Last Name','Email','Perfered Language'];
  const orderBy = ['asc','desc'];
  const order = (event) => {    
    const result = getEmployeeData();
    const orderByResult = () => {
      switch(orderbycategory)
      {
        case 'Last Name':
          return result.sort(compareValues('lastname',orderby));
        case 'Email':
          return result.sort(compareValues('email',orderby));
        case 'Perfered Language':
          return result.sort(compareValues('preferred_language',orderby));
        case 'First Name':
        default:
          return result.sort(compareValues('firstname',orderby));
      }
    }
    setEmployees(orderByResult());
  };

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toLowerCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toLowerCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  

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

  const getEmployeeData = () =>
  {
      switch(category)
      {
        case 'First Name':
          return db.filter(x=> x.firstname && x.firstname.toLowerCase().includes(searchText));
        case 'Last Name':
          return db.filter(x=> x.lastname && x.lastname.toLowerCase().includes(searchText));
        case 'Email':
          return db.filter(x=> x.email && x.email.toLowerCase().includes(searchText));
        case 'Perfered Language':
          return db.filter(x=> x.preferred_language && x.preferred_language.toLowerCase().includes(searchText));
        default:
          return db;
      }     
  }

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
