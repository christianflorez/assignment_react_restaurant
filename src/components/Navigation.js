import React from 'react';
import './Navigation.css';
import NavigationHeader from './NavigationHeader';
import NavigationMenu from './NavigationMenu';

const Navigation = () => {
  return (
    <nav className="Navigation navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <NavigationHeader />
        <NavigationMenu />
      </div>
    </nav>
  );
};

export default Navigation;