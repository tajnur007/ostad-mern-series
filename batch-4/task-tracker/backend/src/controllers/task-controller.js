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
  const taskId = req.query.id;
  const updatedTaskData = req.body;

  const filter = { _id: taskId };
  const update = updatedTaskData;

  try {
    const resp = await TaskModel.findOneAndUpdate(filter, update);

    res.send({
      msg: 'Task updated!',
      data: resp
    });
  } catch (e) {
    console.log('Error: ', e);
    res.status(500).send('Someting went wrong!');
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.query.id;
  const filter = { _id: taskId };
  const update = { isDeleted: true };

  try {
    const resp = await TaskModel.findOneAndUpdate(filter, update);

    res.send({
      msg: 'Task deleted!',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }

};

const singleTask = async (req, res) => {
  const taskId = req.query.id;
  const filter = { _id: taskId };

  try {
    const resp = await TaskModel.findOne(filter);

    if (resp.isDeleted) throw new Error();

    res.send({
      msg: 'Task found',
      data: resp
    });
  } catch (e) {
    res.status(404).send('Task not found!');
  }
};

const allTasks = async (req, res) => {
  try {
    const filter = { isDeleted: false };
    let resp = await TaskModel.find(filter);
    // resp = resp.filter(data => !data.isDeleted);

    res.send({
      msg: 'All tasks',
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
  allTasks
};