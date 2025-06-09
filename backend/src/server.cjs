const express = require("express");
const cors = require("cors");
// const path = require("path");
const { config } = require("dotenv");
const fs = require("fs");

// Загружаем конфигурацию
config();

const app = express();
const PORT = process.env.PORT || 3001;

// Подключаем базу данных
const { sequelize } = require("./config/config.cjs");

// Создаём директории для загрузок
// const UPLOADS_DIR = path.join(__dirname, "..", "uploads");
// const uploadDirs = [
//     path.join(UPLOADS_DIR, "products"),
//     path.join(UPLOADS_DIR, "categories")
// ];

// uploadDirs.forEach(dir => {
//     if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir, { recursive: true });
//     }
// });

// Middleware
app.use(cors());
app.use(express.json());
// app.use('/uploads', (req, res, next) => {
//     if (req.secure) {
//         next();
//     } else {
//         res.redirect(301, `https://${req.headers.host}${req.url}`);
//     }
// }, express.static('uploads'));

app.use("/api/applications", require("./routes/applicationsRoutes.cjs"));

// Инициализация моделей
const { initializeModels } = require("./models/initializeModels.cjs");
initializeModels();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on http://0.0.0.0:${PORT}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

start();