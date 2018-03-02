import React, { Component } from 'react';
import logo from './images/icon_roboapp.png';
import './App.css';

import SignIn from './pages/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Robo</h1>
        </header>
        <p className="App-intro">
          Robo says Hi!
        </p>

        <SignIn />
      </div>

    );
  }
}

export default App;
