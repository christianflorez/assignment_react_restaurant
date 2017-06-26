import React from 'react';
import './MenuItem.css';

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

export default MenuItem;