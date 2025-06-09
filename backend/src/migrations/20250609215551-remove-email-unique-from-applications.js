'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // В up можно оставить пустым, если вы только откатываете изменение
  },

  async down(queryInterface, Sequelize) {
    // В down можно добавить создание ограничения обратно, если нужно
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('applications', 'applications_email_unique');
  }
};