import React, { Component } from 'react';
import axios from "axios"
import EmployeeCard from '../EmployeeCard'
import API from '../../utils/API';


class Main extends Component {
    state = {
      users: [],
      search: '',
    };
  
  
    componentDidMount(){
      API.search().then(res=>{
        console.log(res.data.results)
        this.setState({users: res.data.results})
      })
    }

    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
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