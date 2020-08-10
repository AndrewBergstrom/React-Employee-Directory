import React, { Component } from 'react';
import Main from "./components/Main"
import Header from './components/Header';
import SearchForm from './components/SearchForm'
import Filterbar from './components/Filterbar'




function App() {
  return (
    <div>
      <Header />
      <SearchForm />

      <Filterbar />
      <Main />

    </div>
  )
}

export default App