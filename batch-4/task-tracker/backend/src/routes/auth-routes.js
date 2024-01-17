const express = require('express');
const authControllers = require('../controllers/auth-controller');
const apiEndPoints = require('../utility/api-end-point-constants');

const authRouter = express.Router();
const authEndPoints = apiEndPoints.auth;

authRouter.post(authEndPoints.signin, authControllers.signin);
authRouter.post(authEndPoints.signout, authControllers.signout);
authRouter.post(authEndPoints.forgetPassword, authControllers.forgetPassword);
authRouter.post(authEndPoints.otpValidity, authControllers.otpValidity);
authRouter.post(authEndPoints.resetPassword, authControllers.resetPassword);

module.exports = authRouter;