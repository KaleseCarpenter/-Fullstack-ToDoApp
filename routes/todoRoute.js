// IMPORT EXPRESS TO CREATE ROUTERS
const express = require("express");
// IMPORT TODO CONTROLLER
const todoController = require("./../controllers/todoController");
// CREATE TODO ROUTER
const todoRouter = express.Router();
todoRouter
  .route("/")
  .get(todoController.getTodos)
  .post(todoController.createTodo);
todoRouter
  .route("/:id")
  .get(todoController.getOneTodo)
  .delete(todoController.deleteTodo)
  .put(todoController.updateTodo);
// EXPORT TODO ROUTER
module.exports = todoRouter;