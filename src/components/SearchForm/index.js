import React from 'react';


function SearchForm(props) {
    return(
    <form className="form-inline searchbar">
    <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
    />
    <button className="btn my-2 my-sm-0" type="submit">
        Search
     </button>
</form>
   
   )}

export default SearchForm;

