const UserModel = require('../models/user-models');

const createUser = async (req, res) => {
  const userData = req.body;
  userData.role = 'executive';

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

const searchUsers = async (req, res) => {
  try {
    let keyword = '';
    if (req.query.keyword) keyword = decodeURI(req.query.keyword);

    let resp = await UserModel.find();
    resp = resp.filter(user => {
      return (
        user.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      );
    });

    res.send({
      msg: 'Searched users',
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
  allUsers,
  searchUsers,
};