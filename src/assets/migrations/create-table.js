const seedHelper = require('../seed-helper');

module.exports = seedHelper({
  up: async ({ queryInterface, Sequelize, transaction, addIndexes }) => {
    await queryInterface.createTable('<%= tableName %>', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      <% attributes.forEach(function(attribute) { %>
        <%= attribute.fieldName %>: {
          type: Sequelize.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(Sequelize.${attribute.dataType.toUpperCase()})` : attribute.dataValues ? `${attribute.dataType.toUpperCase()}(${attribute.dataValues})` : attribute.dataType.toUpperCase() %>
        },
      <% }) %>

      <%= createdAt %>: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },

      <%= updatedAt %>: {
        allowNull: false,
        type: Sequelize.DATE
        defaultValue: Sequelize.NOW,
      }
    }, {transaction});
    // update below
    await addIndexes('<%= tableName %>', [/* add indexes needed */], {
      transaction,
    });
  },
  down: async ({ queryInterface, transaction }) => {
    await queryInterface.dropTable('<%= tableName %>', { transaction });
  },
});
