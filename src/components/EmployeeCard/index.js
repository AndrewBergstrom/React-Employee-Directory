import React from 'react'
import "./Employees.css"

function EmployeeCard(props) {

  return (
    
    <table className="table table-striped">
      <tbody>
        <tr>
          <th scope="col"> <img  src={props.img} alt={props.name.first} />  </th>
          <th scope="col">{`${props.name.first} ${props.name.last}`}</th>
          <th scope="col">{props.phone}</th>
          <th scope="col">{`${props.location.city}, ${props.location.country} ${props.location.postcode}`}</th>
          <th scope="col">{props.email}</th>
          <th scope="col"></th>
        </tr>
      </tbody>
    </table>
    
  );
}

export default EmployeeCard;

