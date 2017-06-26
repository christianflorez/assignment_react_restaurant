import React from 'react';

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
export default NavigationMenu;