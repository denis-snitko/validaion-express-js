const express = require("express");
const { errorHandler } = require("./modules/errors/errors.validation");
const userModule = require("./modules/user/user.module");

const app = express();

app.use(errorHandler);
app.use(express.json());

app.use("/users", userModule.userController);

module.exports = app;
