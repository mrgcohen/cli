const _ = require('lodash');
const common = require('common-tags');
const seedHelper = require('../seed-helper');

module.exports = seedHelper({
  up: async ({ query, selectQuery, bulkUpdate, bulkInsert }) => {
    // async code
  },
  down: async ({ query, selectQuery, bulkDelete, noRollback }) => {
   // async code
  },
});
