const mongoose = require('mongoose');

async function dbConnection() {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hwr1u.mongodb.net/${process.env.DB_NAME}`;

  await mongoose.connect(connectionString);

  console.log('---MongoDB Database Connected---');
}

module.exports = dbConnection;