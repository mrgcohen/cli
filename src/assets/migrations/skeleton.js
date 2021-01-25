const seedHelper = require('../seed-helper');

module.exports = seedHelper({
  up: async ({ queryInterface, Sequelize, transaction, addIndexes }) => {
    // migrations here
  },
  down: async ({ queryInterface, transaction }) => {
    // migrations down
  },
});
