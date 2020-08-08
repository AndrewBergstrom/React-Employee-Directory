import React, { Component } from 'react';
import axios from "axios"
import EmployeeCard from '../EmployeeCard'
class Main extends Component {
    state = {
      users: [],
      numInput: 0,
    };
  
  
    componentDidMount(){
      this.makeRequest()
    }
    handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
    }
  
    makeRequest = async () => {
      const URL = `https://randomuser.me/api/?results=200&nat=us`
  
      try {
        let results = await axios.get(URL)
        this.setState({ users: results.data.results })
  
      } catch (e) {
        console.log("ERREOR:  ", e)
      }
  
    };
  
    render(){
      return this.state.users.map((user) => (
          <div className="container">
        <EmployeeCard
          key={user.id.value}
          img={user.picture.large}
          name={user.name}
          phone={user.phone}
          location={user.location}
          email ={user.email}
        />
        </div>
      ));
    };
    
  }

  export default Main;