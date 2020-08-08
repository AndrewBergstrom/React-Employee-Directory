import React from 'react'
import "./Employees.css"

function EmployeeCard(props) {

  return (
    <table class="table table-striped">
      <tbody>
        <tr>
          <th scope="row"> <img  src={props.img} alt={props.name.first} />  </th>
          <td className="col-1">{`${props.name.title} ${props.name.first} ${props.name.last}`}</td>
          <td className="col-3">{props.phone}</td>
          <td className="col-3">{`${props.location.city}, ${props.location.country} ${props.location.postcode}`}</td>
          <td className="col-3">{props.email}</td>
          <td className="col-2"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmployeeCard;

