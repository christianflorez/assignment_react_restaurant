import React from 'react';
import './Navigation.css';

const NavigationHeader = () => {
  return (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Puccini's</a>
    </div>
  );
};

const NavigationMenu = () => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#menu">Our Menu</a>
        </li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="Navigation navbar bg-primary navbar-fixed-top">
      <div className="container-fluid">
        <NavigationHeader />
        <NavigationMenu />
      </div>
    </nav>
  );
};

export default Navigation;