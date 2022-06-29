// IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require("express");
// IMPORT TODO ROUTER
const todoRouter = require("./routes/todoRoute");
// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();
// Tell your express application not to accept nested data
app.use(
  express.urlencoded({
    extended: false,
  })
);
// Add a body parser
app.use(express.json());
// Add path to static files
app.use(express.static("public"));
// SEND USER TO THE TODO ROUTER
app.use("/todos", todoRouter);
module.exports = app;