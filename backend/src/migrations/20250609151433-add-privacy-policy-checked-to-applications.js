'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applications', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        // Убрано unique: true, чтобы разрешить дубликаты email
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: /^[\d\s\+\-\(\)]{10,20}$/i,
        },
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      privacy_policy_checked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
  }
};