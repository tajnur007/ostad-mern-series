const express = require('express');
const userControllers = require('../controllers/user-controller');
const apiEndPoints = require('../utility/api-end-point-constants');

const userRouter = express.Router();
const userEndPoints = apiEndPoints.user;

userRouter.post(userEndPoints.user, userControllers.createUser);
userRouter.put(userEndPoints.user, userControllers.updateUser);
userRouter.delete(userEndPoints.user, userControllers.deleteUser);
userRouter.get(userEndPoints.user, userControllers.singleUser);
userRouter.get(userEndPoints.allUsers, userControllers.allUsers);

module.exports = userRouter;