const UserModel = require('../models/user-models');

const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const resp = await UserModel.create(userData);

    res.status(201).send({
      msg: 'User created!',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Someting went wrong!');
  }

};

const updateUser = async (req, res) => {
  const userEmail = req.query.email;
  const updatedUserData = req.body;

  const filter = { email: userEmail };
  const update = updatedUserData;

  try {
    const resp = await UserModel.findOneAndUpdate(filter, update);
    res.send({
      msg: 'User updated!',
      data: resp
    });
  } catch (e) {
    console.log('Error: ', e);
    res.status(500).send('Someting went wrong!');
  }
};

const deleteUser = async (req, res) => {
  const userEmail = req.query.email;
  const filter = { email: userEmail };

  try {
    const resp = await UserModel.findOneAndDelete(filter);
    res.send({
      msg: 'User deleted!',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }

};

const singleUser = async (req, res) => {
  const userEmail = req.query.email;
  const filter = { email: userEmail };

  try {
    const resp = await UserModel.findOne(filter);
    res.send({
      msg: 'User found',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }
};

const allUsers = async (req, res) => {
  try {
    const resp = await UserModel.find();
    res.send({
      msg: 'All users',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  singleUser,
  allUsers
};