import React from 'react';

function filterBar(props) {
    return (
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope ="col">Photo</th>
                    <th scope ="col">name</th>
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