import React from 'react';
import './style.css'

function filterBar(props) {
    return (
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope ="col">Photo</th>
                    <th onClick={props.sortEmp} scope ="col" className="nameSort" >name </th>
                    <th scope ="col">Phone</th>
                    <th scope ="col">Location</th>
                    <th scope ="col">Email</th>
                </tr>
            </thead>
        </table>
        </div>
    )
}

export default filterBar;