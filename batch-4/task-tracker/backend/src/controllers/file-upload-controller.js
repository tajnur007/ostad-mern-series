const TaskModel = require('../models/task-models');
const { parseUserToken } = require('../utility/helpers');

const fileUpload = async (req, res) => {
  try {
    const userData = parseUserToken(req);

    res.status(201).send({
      msg: 'File uploaded!',
      data: null
    });
  } catch (e) {
    res.status(500).send('Someting went wrong!');
  }

};

module.exports = {
  fileUpload,
};
