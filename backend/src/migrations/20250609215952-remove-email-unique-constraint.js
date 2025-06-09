'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Удаляем ограничение уникальности
    await queryInterface.removeConstraint('applications', 'applications_email_key18');
  },

  async down(queryInterface, Sequelize) {
    // Опционально: можно вернуть ограничение обратно (если потребуется откат)
    await queryInterface.addConstraint('applications', {
      fields: ['email'],
      type: 'unique',
      name: 'applications_email_key18',
    });
  }
};