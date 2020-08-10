import React from 'react'
import "./Employees.css"

function EmployeeCard(props) {

  return (
    <div className="container">
    <table class="table table-striped">
      <tbody>
        <tr>
          <th scope="col"> <img  src={props.img} alt={props.name.first} />  </th>
          <td scope="col">{`${props.name.title} ${props.name.first} ${props.name.last}`}</td>
          <td scope="col">{props.phone}</td>
          <td scope="col">{`${props.location.city}, ${props.location.country} ${props.location.postcode}`}</td>
          <td scope="col">{props.email}</td>
          <td scope="col"></td>
        </tr>
      </tbody>
    </table>
    </div> 
  );
}

export default EmployeeCard;

