import express from "express";
const app = express();
const mongoose = require("mongoose");

//dotenv
require("dotenv").config();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  // res.json({ message: "Hello World" })
  res.send("<h1> HomePage </h1>");
});


// global error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// connect db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log("Connected to DB & Server is running on port", process.env.PORT);
//     });

//   })
//   .catch((error) => {
//     console.log(error);
//   });
  

