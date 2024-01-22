const { parseUserToken } = require('../utility/helpers');

const isValidUser = (req, res, next) => {
  try {
    const userData = parseUserToken(req);
    next();
  } catch (e) {
    res.status(403).send('Invalid token!');
  }
};

const isAdmin = (req, res, next) => {
  try {
    const userData = parseUserToken(req);

    if (userData.role === 'admin') {
      next();
    } else if ((req.method === 'GET') && (req.path === '/user') && (req.query.email === userData.email)) {
      next();
    } else {
      res.status(403).send('Permission not granted!');
    }
  } catch (e) {
    res.status(401).send('Invalid token!');
  }
};

module.exports = {
  isValidUser,
  isAdmin,
};