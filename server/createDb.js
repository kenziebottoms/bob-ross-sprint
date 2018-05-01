'use strict';

const models = require('./models');
const { generateHash } = require('./ctrl/authC');

models.sequelize.sync({ force: true })
  .then(() => {
    return models.User.create({
      username: 'kenzie',
      email: 'kenziebottoms@gmail.com',
      password: generateHash('kenzie')
    });
  })
  .then(() => {
    process.exit();
  });