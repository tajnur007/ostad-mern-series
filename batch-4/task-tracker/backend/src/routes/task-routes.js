const express = require('express');
const taskControllers = require('../controllers/task-controller');
const apiEndPoints = require('../utility/api-end-point-constants');
const authMiddlewares = require('../middlewares/auth-middlewares');

const taskRouter = express.Router();
const taskEndPoints = apiEndPoints.task;

taskRouter.post(taskEndPoints.task, authMiddlewares.isValidUser, taskControllers.createTask);
taskRouter.put(taskEndPoints.task, authMiddlewares.isValidUser, taskControllers.updateTask);
taskRouter.delete(taskEndPoints.task, authMiddlewares.isValidUser, taskControllers.deleteTask);
taskRouter.get(taskEndPoints.task, authMiddlewares.isValidUser, taskControllers.singleTask);
taskRouter.get(taskEndPoints.allTasks, authMiddlewares.isValidUser, taskControllers.allTasks);
taskRouter.get(taskEndPoints.search, authMiddlewares.isValidUser, taskControllers.searchTasks);

module.exports = taskRouter;