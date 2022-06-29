// IMPORT MONGOOSE IN ORDER TO CREATE A MODEL
const mongoose = require("mongoose");
// Before you can create your model you need to create a schema
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});
// Use schema to create model
const Todos = mongoose.model("Todo", todoSchema);
// EXPORT MODEL TO CONTROLLER FILE
module.exports = Todos;