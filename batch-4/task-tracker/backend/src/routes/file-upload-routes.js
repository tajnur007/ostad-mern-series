const express = require('express');
const fileUploadControllers = require('../controllers/file-upload-controller');
const authMiddlewares = require('../middlewares/auth-middlewares');
const upload = require('../middlewares/file-upload-middleware');

const fileUploadRouter = express.Router();
const fileUploadEndPoint = '/file-upload';

fileUploadRouter.post(
  fileUploadEndPoint,
  authMiddlewares.isValidUser,
  upload.array('uploaded-file', 10),
  fileUploadControllers.fileUpload
);

module.exports = fileUploadRouter;