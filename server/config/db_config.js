const { mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL);
    console.log(
      `DB CONNECTION SUCCESS : ${conn.connection.name}`.bgGreen.black
    );
  } catch (error) {
    console.log(`DB CONNECTION FAILED : ${error.message}`.bgRed);
  }
};

module.exports = connectDB;
