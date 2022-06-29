// IMPORT OUR DATA MODEL
const Todos = require("./../models/todoModel");
// CREATE ROUTE HANDLERS
// exports.getIndex = (request, response) => {
//   response.send("Index Homepage Hello");
// };
// LET'S CREATE OUR INDEX PAGE
exports.getTodos = async (request, response) => {
  try {
    // Let's retrieve all of the todos inside our db
    const todos = await Todos.find();
    // Send response
    response.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      data: {
        error: error.message,
      },
    });
  }
};
exports.createTodo = async (request, response) => {
  try {
    // Create a new todo
    const newTodo = await Todos.create(request.body);
    // Send a response
    response.status(201).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
exports.getOneTodo = async (request, response) => {
  try {
    // Let's retrieve a single todo
    const todo = await Todos.findById(request.params.id);
    // Send a response
    response.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
exports.deleteTodo = async (request, response) => {
  try {
    // Let's retrieve a single todo
    await Todos.findByIdAndDelete(request.params.id);
    // Send a response
    response.status(204).json({
      status: "success",
      data: {},
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
exports.updateTodo = async (request, response) => {
  try {
    // Let's retrieve a single todo
    const updatedTodo = await Todos.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    // Send a response
    response.status(200).json({
      status: "success",
      data: {
        updatedTodo,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};