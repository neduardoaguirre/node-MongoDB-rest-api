const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
