//const mongoose = require("mongoose");

//const connectDB = async () => {
//  try {
//    const { connection } = await mongoose.connect(process.env.MONGO_URI);
//    console.log(`MongoDB connected with ${connection.host} `);
//  } catch (error) {
//    console.log(error, "cant connect to db");
//  }
//};
////mongodb+srv://harshitsh1226:resume1234@resume.qqbfgcq.mongodb.net/?retryWrites=true&w=majority
//module.exports = connectDB;



const mongoose = require("mongoose");
//const mongoDB = "mongodb://127.0.0.1:27017/blog";
//mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
//  if (!err) {
//    console.log("DB connected")
//  }
//});
//const db = mongoose.connection;
//db.on("error", console.error.bind(console, "MongoDB connection error"));



const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/resumeCraft");
    console.log(`MongoDB connected with ${connection.host} `);
  } catch (error) {
    console.log(error, "cant connect to db");
  }
};

module.exports = connectDB;
