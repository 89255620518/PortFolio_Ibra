import express from "express";

express.request.user = undefined;

const app = express();
app.use((req, next) => {
    req.user = undefined;
    next();
});