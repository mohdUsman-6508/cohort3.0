import express from "express";
import bodyParser from "body-parser";

const app = new express();
const port = 4000;

app.use(bodyParser.json()); //without this I was getting req.body undefined

app.get("/", working);
app.post("/api/todo/create", createTodo);
app.get("/api/todo/get", getTodos);
app.put("/api/todo/update", updateTodos);
app.delete("/api/todo/delete", deleteTodos);

let todos = [{ id: 1, text: "hit that wall", done: false }];
let index = 1;

// /////////////////////////////// functions ///////////////////////////////////// //

function working(req, res) {
  return res.status(200).json({
    success: true,
    message: "This is working...",
  });
}

function createTodo(req, res) {
  const data = req.body;

  if (!data) {
    res.status(404).json({
      success: false,
      message: "feilds may be empty!",
    });
    return;
  }
  index++;
  const newTodo = { id: index, text: data.text, done: data.done };
  todos.push(newTodo);
  console.log(todos);
  res.status(200).json({
    success: true,
    message: "todo is created successfully.",
    todo: newTodo,
  });
}

function getTodos(req, res) {
  if (todos.length == 0) {
    res.status(200).json({
      message: "Todo list is empty!",
    });
    return;
  }
  res.status(200).json({
    success: true,
    message: "List of todos",
    todos: todos,
  });
}

function updateTodos(req, res) {
  let data = req.body;
  if (!data) {
    res.status(404).json({
      success: false,
      message: "Fields may be empty!",
    });
    return;
  }
  let updatedTodo = {};
  let i = 0;
  for (; i < todos.length; i++) {
    if (todos[i].id == data.id) {
      updatedTodo = { id: data.id, text: data.text, done: data.done };
      todos[i] = updatedTodo;
      break;
    }
  }
  if (i == todos.length) {
    res.status(404).json({
      success: false,
      message: "todo is not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "todo is updated successfully",
    updateTodos: updatedTodo,
  });
}

function deleteTodos(req, res) {
  let { id } = req.body;
  if (!id) {
    res.status(404).json({
      message: "Fields may be empty!",
    });
  }
  let i = 0;
  for (; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos.splice(i, 1);
      break;
    }
  }
  if (i > todos.length) {
    res.status(404).json({
      success: false,
      message: "todo is not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "todo is deleted successfully",
  });
}
// ////////////////////////////// Listening //////////////////////////////// //

app.listen(port, function () {
  console.log(`Listening at port ${port}...`);
});
