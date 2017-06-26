import React from 'react';
import './Header.css';
import data from '../data.js';

const Header = () => {
  return (
    <div className="Header jumbotron" id="home">
      <div className="container">
        <h1>{data.header.title}</h1>
        <h2>{data.header.description}</h2>
      </div>
    </div>
  )
};

export default Header;