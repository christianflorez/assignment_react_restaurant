import faker from 'faker';

const data = {
  "header": {
    "title": "Welcome to Puccini's",
    "description": "Only the finest dining experience this side of the Mississippi."
  },
  "reservations": {
    "title": "Make a Reservation",
    "subtitle": "Our Location",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sint laborum veniam earum iste incidunt ipsa, asperiores ipsum repellat sapiente quam nulla pariatur, soluta! Nemo vel necessitatibus odit voluptatem in!",
    "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162194.45115094582!2d-73.69473155931978!3d40.9421888628049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28a86e5097c33%3A0x9a831a9d7c8c0ab3!2sPuccini!5e0!3m2!1sen!2sus!4v1498519005923"
  },
  "menu": {
    "title": "Menu",
    "menuFoods": []
  }
};

for (let i = 0; i < 6; i++) {
  data.menu.menuFoods.push({
    image: faker.image.food(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price()
  });
}

export default data;