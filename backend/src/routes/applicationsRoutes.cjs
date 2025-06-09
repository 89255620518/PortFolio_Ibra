const express = require('express');
const { createApplication, getApplications, getApplicationById } = require('../controllers/applicationsController.cjs');
const { applicationValidationRules } = require('../controllers/applicationsValidator.cjs');

const router = express.Router();

// Создание новой заявки
router.post('/createApplication', async (req, res) => {
    try {
        await createApplication(req, res);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/getApplications', async (req, res) => {
    try {
        await getApplications(req, res);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/getApplicationById/:id', async (req, res) => {
    try {
        await getApplicationById(req, res);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;