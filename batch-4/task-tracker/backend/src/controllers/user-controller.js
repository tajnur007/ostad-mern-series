const createUser = (req, res) => {
  const userData = req.body;
  console.log('User::', userData);
  res.status(201).send('Create user!');
};

const updateUser = (req, res) => {
  const userEmail = req.query.email;
  const updatedUserData = req.body;
  console.log('Email::', userEmail);
  console.log('Data::', updatedUserData);
  res.send('Update user!');
};

const deleteUser = (req, res) => {
  const userEmail = req.query.email;
  console.log('User Email::', userEmail);
  res.send('Delete user!');
};

const singleUser = (req, res) => {
  const userEmail = req.query.email;
  console.log('User Email::', userEmail);
  res.send('Single user!');
};

const allUsers = (req, res) => {
  res.send('All users!');
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  singleUser,
  allUsers
};