import React from "react";

const Wrapper = (props) => {
  let count = 1;
  return (
    <div className="container">
      <div className="card bg-light mt-3 mb-3">
        <div className="card-header">Employee Search{props.searchText ? ' for ' + props.searchText : ''}</div>
      </div>
      <table className="table">
        <thead>
          <tr className="thead-light">
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Preferred Language</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map((employee) => {
            return (
              <tr key={employee.id}>
                <th scope="row">{count++}</th>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_no}</td>
                <td>{employee.preferred_language}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Wrapper;
