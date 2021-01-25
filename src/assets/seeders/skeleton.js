const _ = require('lodash');
const common = require('common-tags');
const seedHelper = require('../seed-helper');

module.exports = seedHelper({
  up: async ({  }) => {},
  down: async ({ getEntityByName, bulkUpdate, now }) => {},
});
