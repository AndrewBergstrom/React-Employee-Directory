import React from 'react';
import Main from "./components/Main"
import Header from './components/Header';
import SearchForm from './components/SearchForm'
import Filterbar from './components/Filterbar'

function App(props) {
  return (
    <div>
      <Header />
      <SearchForm value={props.value} handleInputChange={props.handleInputChange}/> 
      <Filterbar />
      <Main />

    </div>
  )
}

export default App