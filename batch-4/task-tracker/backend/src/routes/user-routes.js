const express = require('express');
const userControllers = require('../controllers/user-controller');
const apiEndPoints = require('../utility/api-end-point-constants');
const authMiddlewares = require('../middlewares/auth-middlewares');

const userRouter = express.Router();
const userEndPoints = apiEndPoints.user;

userRouter.post(userEndPoints.user, authMiddlewares.isValidUser, userControllers.createUser);
userRouter.put(userEndPoints.user, authMiddlewares.isValidUser, userControllers.updateUser);
userRouter.delete(userEndPoints.user, authMiddlewares.isAdmin, userControllers.deleteUser);
userRouter.get(userEndPoints.user, authMiddlewares.isAdmin, userControllers.singleUser);
userRouter.get(userEndPoints.allUsers, authMiddlewares.isAdmin, userControllers.allUsers);
userRouter.get(userEndPoints.search, authMiddlewares.isAdmin, userControllers.searchUsers);

module.exports = userRouter;