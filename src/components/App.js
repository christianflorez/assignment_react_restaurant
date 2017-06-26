import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Reservations from './Reservations';
import Menu from './Menu';
import './App.css';

/*
  Structure: 
  Navbar
  Header

  Reservation Form
    Date input
    Time input
    # of Guests input
  Menu
    Menu item
*/


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
