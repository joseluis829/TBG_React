import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from "./components/StopWatch";
import NameForm1 from "./components/NameForm1";
import MyFancyForm from "./components/MyFancyForm";
import AppEx from "./components/AppEx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StopWatch/>
        <NameForm1 
          getErrorMessage={value => {
            if(value.length < 3) {
              return `Value must be at least 3 characters, but it is only ${value.length}`
            }
            if(!value.includes('s')) {
              return `Value does not include "s" but it should`
            }
            return null
          }} 
        />
        <h2>Multiple Selections</h2>
        <MyFancyForm />
        <AppEx />
      </div>
    );
  }
}

export default App;
