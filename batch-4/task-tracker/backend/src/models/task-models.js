const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  status: { type: String, require: true },
  priority: { type: String, require: true },
  assignee: String,
  createdBy: { type: String, require: true },
  isDeleted: { type: Boolean, require: true },
});

const taskModel = model('tasks', taskSchema);

module.exports = taskModel;