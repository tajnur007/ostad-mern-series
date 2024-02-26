const TaskModel = require('../models/task-models');
const { parseUserToken } = require('../utility/helpers');

const createTask = async (req, res) => {
  try {
    const userData = parseUserToken(req);

    const taskData = {
      // ...req.body,
      title: req.body?.title,
      description: req.body?.description,
      status: req.body?.status,
      priority: req.body?.priority,
      assignee: req.body?.assignee,
      createdBy: userData.email,
      isDeleted: false,
    };

    const resp = await TaskModel.create(taskData);

    res.status(201).send({
      msg: 'Task created!',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Someting went wrong!');
  }

};

const updateTask = async (req, res) => {
  try {
    const taskId = req.query.id;
    const updatedTaskData = req.body;

    const filter = { _id: taskId };
    const update = updatedTaskData;
    const userData = parseUserToken(req);

    const taskData = await TaskModel.findOne(filter);

    if (!taskData) res.status(404).send('Task not found.');

    if ((taskData.createdBy !== userData.email) && (userData.role !== 'admin')) {
      res.status(403).send('You do not have enough permission');
    } else {
      const resp = await TaskModel.findOneAndUpdate(filter, update);

      res.send({
        msg: 'Task updated!',
        data: resp
      });
    }
  } catch (e) {
    res.status(500).send('Someting went wrong!');
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.query.id;
    const filter = { _id: taskId };
    const update = { isDeleted: true };
    const userData = parseUserToken(req);

    const taskData = await TaskModel.findOne(filter);

    if (!taskData) res.status(404).send('Task not found.');

    if ((taskData.createdBy !== userData.email) && (userData.role !== 'admin')) {
      res.status(403).send('You do not have enough permission');
    } else if (userData.role === 'admin') {
      const resp = await TaskModel.findOneAndDelete(filter);

      res.send({
        msg: 'Task deleted!',
        data: resp
      });
    } else {
      const resp = await TaskModel.findOneAndUpdate(filter, update);

      res.send({
        msg: 'Task deleted!',
        data: resp
      });
    }
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }

};

const singleTask = async (req, res) => {
  try {
    const taskId = req.query.id;
    const filter = { _id: taskId };
    const userData = parseUserToken(req);

    const taskData = await TaskModel.findOne(filter);

    if (!taskData) res.status(404).send('Task not found.');

    if ((taskData.createdBy !== userData.email) && (userData.role !== 'admin')) {
      res.status(403).send('You do not have enough permission');
    } else if (taskData.isDeleted && (userData.role !== 'admin')) {
      res.status(404).send('Task not found.');
    } else {
      const resp = await TaskModel.findOne(filter);

      res.send({
        msg: 'Task found',
        data: resp
      });
    }
  } catch (e) {
    console.log('Error: ', e);
    res.status(404).send('Task not found!');
  }
};

const allTasks = async (req, res) => {
  try {
    const userData = parseUserToken(req);

    let resp = await TaskModel.find();

    resp = resp.filter(task => (
      (task.createdBy == userData.email || task.assignee == userData.email) &&
      (task.isDeleted == false || userData.role == 'admin')
    ));

    res.send({
      msg: 'All tasks',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }
};

const searchTasks = async (req, res) => {
  try {
    let keyword = '';
    if (req.query.keyword) keyword = decodeURI(req.query.keyword);

    const filter = {};
    const userData = parseUserToken(req);

    if (userData.role !== 'admin') {
      filter.createdBy = userData.email;
      filter.isDeleted = false;
    }

    let resp = await TaskModel.find(filter);
    resp = resp.filter(task => task.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));

    res.send({
      msg: 'Searched tasks',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  singleTask,
  allTasks,
  searchTasks,
};
