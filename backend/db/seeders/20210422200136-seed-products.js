'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
        {
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          img: faker.image.imageUrl(640, 480, "technics", true),
          price: faker.datatype.float(),
          num_likes: 0,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
