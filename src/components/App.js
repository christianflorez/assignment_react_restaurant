import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Reservations from './Reservations';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Reservations />
        <Menu />
      </div>
    );
  }
}

export default App;
