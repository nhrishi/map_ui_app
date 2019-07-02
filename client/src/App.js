import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Customers/>
      </div>
    );
  }
}

export default App;
