import React from 'react';


function SearchForm(props) {
    return (

        <div className="container">
            <form className="form-inline searchbar mb-2">
                <input
                    onChange= {props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For an Employee"
                    id="search"
                />
            </form>
        </div>
        
    )
}

export default SearchForm;

