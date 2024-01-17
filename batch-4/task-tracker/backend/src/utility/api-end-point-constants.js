const user = {
  user: '/user',
  allUsers: '/users'
};

const task = {
  task: '/task',
  allTasks: '/tasks'
};

const auth = {
  signin: '/auth/signin',
  signout: '/auth/signout',
  forgetPassword: '/auth/forget-password',
  otpValidity: '/auth/otp-validity',
  resetPassword: '/auth/reset-password',
};

module.exports = {
  user,
  task,
  auth,
};