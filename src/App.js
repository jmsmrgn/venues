import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SF Tunage</h2>
        </div>
        <p className="App-intro">
          unified event calendar for select venues in san francisco - pulls from songkick's api
        </p>
      </div>
    );
  }
}

export default App;
