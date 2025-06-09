const { body } = require('express-validator');

exports.applicationValidationRules = [
    body('first_name')
        .notEmpty().withMessage('Имя обязательно для заполнения')
        .isLength({ max: 50 }).withMessage('Имя не должно превышать 50 символов'),

    body('email')
        .notEmpty().withMessage('Email обязателен для заполнения')
        .isEmail().withMessage('Некорректный формат email')
        .normalizeEmail(),

    body('phone_number')
        .optional()
        .matches(/^[\d\s\+\-\(\)]{10,20}$/).withMessage('Некорректный формат номера телефона'),

    body('comments')
        .notEmpty().withMessage('Комментарий обязателен для заполнения')
        .isLength({ max: 500 }).withMessage('Комментарий не должен превышать 500 символов'),

    body('privacy_policy_checked')
        .equals('true').withMessage('Необходимо принять политику конфиденциальности')
];