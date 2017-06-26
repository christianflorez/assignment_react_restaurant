import React from 'react';
import faker from 'faker';
import MenuItem from './MenuItem';

const menuFoods = [];

for (let i = 0; i < 6; i++) {
  menuFoods.push({
    image: faker.image.food(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price()
  });
}

const Menu = () => {
  const menuItems = menuFoods.map(item => (
    <MenuItem item={ item } key={ item.name } />
  ));

  return (
    <div id="menu">
      <div className="jumbotron">
        <div className="container">
          <h1>Menu</h1>
          <div className="row">{ menuItems }</div>
        </div>
      </div>
    </div>
  )
};

export default Menu;