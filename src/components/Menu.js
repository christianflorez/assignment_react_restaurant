import React from 'react';
import './MenuItem.css';
import data from '../data.js';

const MenuItem = ({ item }) => {
  const { image, name, description, price } = item;

  return (
    <div className="MenuItem col-md-4">
        <img src={ image } className="img-responsive" alt=""/>
        <p>{ name }</p>
        <p>{ description }</p>
        <p>${ price }</p>
    </div>
  )
};

const Menu = () => {
  const menuItems = data.menu.menuFoods.map((item, index) => (
    <MenuItem item={ item } key={ index } />
  ));

  return (
    <div id="menu">
      <div className="jumbotron">
        <div className="container">
          <h1>{ data.menu.title }</h1>
          <div className="row">{ menuItems }</div>
        </div>
      </div>
    </div>
  )
};

export default Menu;