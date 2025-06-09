const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const { sequelize } = require("./index.cjs");

class Applications extends Model {
    static validatePhoneNumber(phone) {
        const cleaned = phone.replace(/\D/g, '');
        return /^([78]\d{10}|\d{10})$/.test(cleaned);
    }
}

const initializeApplicationsModels = (sequelize) => {
    Applications.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },

            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    validatePhoneNumber(value) {
                        if (value && !Applications.validatePhoneNumber(value)) {
                            throw new Error("Некорректный номер телефона");
                        }
                    },
                },
                field: "phone_number",
            },

            comments: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },

            privacyPolicyChecked: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false, // можно установить false по умолчанию
                validate: {
                    isTrue(value) {
                        if (value !== true) {
                            throw new Error("Необходимо согласие с политикой конфиденциальности");
                        }
                    },
                },
                field: "privacy_policy_checked", // для snake_case в БД
            },
        },
        {
            sequelize,
            modelName: "Application",
            tableName: "applications",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            underscored: true,
        }
    );

    return Applications;
};

module.exports = { Applications, initializeApplicationsModels };