const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const splittedFileName = file.originalname.split('.');
    const fileExt = splittedFileName[splittedFileName.length - 1];
    let fileType = 'file';

    if (file.mimetype.includes('image')) {
      fileType = 'image';
    } else if (file.mimetype.includes('pdf')) {
      fileType = 'pdf';
    } else if (file.mimetype.includes('json')) {
      fileType = 'json';
    }

    cb(null, fileType + '-' + uniqueSuffix + '.' + fileExt);
  }
});

module.exports = multer({ storage: storage });