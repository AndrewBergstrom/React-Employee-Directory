import React, { Component } from 'react';
import Main from "./components/Main"
import Header from "./components/Header"

const style = {
  empContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}
class App extends Component {
  state = {
    users: [],
    empInput: 0,
  };
 render() {
    const isEmployeeEntered = this.state.empInput === 0
    return (
      <div className="searchbox">
        <Header />
        
      <form className="form-inline">
          <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e => this.handleInputChange(e)}
          />
          <button className="btn my-2 my-sm-0" type="submit">
              Search
           </button>
      </form>


        
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  </table>
  <div style={style.empContainer}><Main/></div>
      </div>
    );
  }
}

export default App;
