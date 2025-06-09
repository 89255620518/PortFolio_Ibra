const { error } = require('console');
const { Applications } = require('../models/applications.cjs');
const { validationResult } = require('express-validator');
const { sendEmail } = require('../utils/sendEmail.cjs');

exports.createApplication = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { first_name, email, phone_number, comments } = req.body;

        if (!req.body.privacy_policy_checked) {
            return res.status(400).json({
                errors: "Необходимо принять политику конфиденциальности"
            });
        }

        const newApplication = await Applications.create({
            first_name,
            email,
            phone_number,
            comments,
            privacy_policy_checked: true,
        })

        const applicationDatails = {
            first_name,
            email,
            phone_number,
            comments,
        }

        await sendEmail(applicationDatails)

        res.status(201).json({
            message: 'Заявка успешно создана',
            data: newApplication
        });
    } catch (error) {
        console.error("Ошибка при создании заявки: ", error);
        res.status(500).json({
            error: 'Произошла ошибка при создании заявки',
            details: error.message
        });

    }
}

exports.getApplications = async (req, res) => {
    try {
        const applications = await Applications.findAll({
            order: [['created_at', 'DESC']]
        });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getApplicationById = async (req, res) => {
    try {
        const application = await Applications.findByPk(req.params.id);
        if (!application) {
            return res.status(404).json({ error: "Заявка не найдена" });
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};