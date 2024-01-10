const express = require('express');
const taskControllers = require('../controllers/task-controller');
const apiEndPoints = require('../utility/api-end-point-constants');

const taskRouter = express.Router();
const taskEndPoints = apiEndPoints.task;

taskRouter.post(taskEndPoints.task, taskControllers.createTask);
taskRouter.put(taskEndPoints.task, taskControllers.updateTask);
taskRouter.delete(taskEndPoints.task, taskControllers.deleteTask);
taskRouter.get(taskEndPoints.task, taskControllers.singleTask);
taskRouter.get(taskEndPoints.allTasks, taskControllers.allTasks);

module.exports = taskRouter;