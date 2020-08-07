import React, { Component } from 'react';
import axios from "axios"
import './App.css';

class App extends Component {
  state = {
    numInput: 0,
  };
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  makeRequest = async () =>{
    const URL = `https://randomuser.me/api/?results=${this.state.numInput}&nat=us`
    let data; 
    try{
      data = await axios.get(URL)
      let {
        data: {results}, 
      } = data;
      console.log(results)
    } catch(e){
      console.log("ERREOR:  ",e)
    }
    
  }
  render() {
    const isNumberEntered = this.state.numInput === 0
    return (
      <div className="App">
        <h1>Andrew's International Employee Tracker</h1>
        <label htmlFor="numInput">
          # of Emps
        <input id="numInput"
            name="numInput"
            value={this.state.numInput}
            type="number"
            min="0"
            onChange={this.handleInputChange}

          />
        </label>
        <button disabled={isNumberEntered} onClick ={this.makeRequest}>
          {isNumberEntered ?"Please Enter A Number": "Submit"}</button>

        <div className="empContainer">{this.state.numInput}</div>
      </div>
    );
  }
}

export default App;
