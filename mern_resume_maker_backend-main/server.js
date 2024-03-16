const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database.js");

config({
  path: "./config/config.env",
});

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    // credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Route Imports
const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute);

// app.get("/", (req, res) =>
//   res.send(
//     `<h1>Server is working click <a href=${process.env.FRONTEND_URL}>here</a></h1>`
//   )
// );

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
