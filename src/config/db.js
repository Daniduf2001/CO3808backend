const mongoose = require('mongoose');

const dBConnection = async () => {
  mongoose.set('strictQuery', true);
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    if (connection) {
      console.log('🐻 MongoDB Connected');
    } else {
    }
  } catch (error) {
    console.log(error);
    console.log('🐻 MongoDB Connection Failed');
  }
};

module.exports = dBConnection;
