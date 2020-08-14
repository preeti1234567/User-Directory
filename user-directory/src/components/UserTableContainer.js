import React, { Component } from "react";
import UserSearch from "./UserSearch";
import EmployeeTable from "./EmployeeTable";
import employees from "./employee.json"

class UserTableContainer extends Component {


state = {
  employees,
  empSort: [],
  sorted: false,
};





export default UserTableContainer;