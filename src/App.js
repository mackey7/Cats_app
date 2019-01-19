import React, { Component } from 'react';
import Header from "./Components/Header.jsx";
import CatImageContainer from "./Components/CatImageContainer.jsx";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text={"Cats App"}> </Header>
        <CatImageContainer />
      </div>
    );
  }
}

export default App;
