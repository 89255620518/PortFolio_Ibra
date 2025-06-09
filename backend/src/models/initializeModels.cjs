const { sequelize } = require("../config/config.cjs");
const { initializeApplicationsModels, Applications } = require('../models/applications.cjs')

async function initializeModels() {
    initializeApplicationsModels(sequelize);

    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.error('Ошибка синхронизации моделей с БД: ', error);
        throw error;
    }

    const models = {
        Applications,
    }

    Object.values(models).forEach((model) => {
        if (model.associate) {
            model.associate(models);
        }
    });

    return models;
}

module.exports = { initializeModels };