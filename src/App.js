import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    numInput:0,
  };

handleInputChange = event=>{
  const {name, value} = event.target
  this.setState({[name]:value})
}
  render() {
    return (
      <div className="App">
        <h1>Andrew's International Employee Tracker</h1>
        <label htmlfor="numInput">
          # of Emps
        <input id="numInput" 
        name="numInput" 
        value={this.state.numInput} 
        type="number" 
        min="0" 
        onChange={this.handleInputChange}
        
        />
        </label>
        <button>Submit</button>

        <div className ="empContainer">{this.state.numInput}</div>
      </div>
    );
  }
}

export default App;
