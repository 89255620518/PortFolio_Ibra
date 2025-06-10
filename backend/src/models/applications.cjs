const { Model, DataTypes } = require("sequelize");

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

            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },

            phone_number: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    validatePhoneNumber(value) {
                        if (value && !Applications.validatePhoneNumber(value)) {
                            throw new Error("Некорректный номер телефона");
                        }
                    },
                },
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
                defaultValue: false,
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