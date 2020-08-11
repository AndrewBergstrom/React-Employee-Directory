import React, { Component } from 'react';
import EmployeeCard from '../EmployeeCard'
import API from '../../utils/API';
import SearchForm from '../SearchForm'
import Filterbar from '../Filterbar'

class Main extends Component {
  state = {
    users: [],
    search: '',
  };


  componentDidMount() {
    API.search().then(res => {
      console.log(res.data.results)
      this.setState({ users: res.data.results })
    })
  }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name

    this.setState({
      [name]: value});
  };



// Renders employee info
  render() {
    
    return(
      <>
      <SearchForm handleInputChange={this.handleInputChange} value={this.state.search} />
      <Filterbar />
      {this.state.users.filter(user => {return user.name.first.toLowerCase().indexOf(this.state.search) > -1}).map((user) => (
      <div className="container">
        <EmployeeCard
          key={user.id.value}
          img={user.picture.large}
          name={user.name}
          phone={user.phone}
          location={user.location}
          email={user.email}
        />
      </div>
      
     ))}
     </>
    );
  };
}

export default Main;

// <SearchForm value={props.value} handleInputChange={props.handleInputChange}/> 

