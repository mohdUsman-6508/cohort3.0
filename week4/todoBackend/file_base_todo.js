import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = new express();
const port = 4000;
let index = Math.round(Math.random() * 10000);

app.use(bodyParser.json()); //without this I was getting req.body undefined

// for the file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "todos.json");

///////////////////

// routes //
app.get("/", working);
app.post("/api/todo/create", createTodo);
app.get("/api/todo/get", getTodos);
app.put("/api/todo/update", updateTodos);
app.delete("/api/todo/delete", deleteTodos);

////////////////

// file base //

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function readTodos() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

// ///////// //

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
  const todos = readTodos();
  todos.push(newTodo);
  writeTodos(todos);

  res.status(200).json({
    success: true,
    message: "todo is created successfully.",
    todo: newTodo,
  });
}

function getTodos(req, res) {
  let todos = readTodos();
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
  let todos = readTodos();
  let updatedTodo = {};
  let flag = false;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == data.id) {
      flag = true;
      updatedTodo = { id: data.id, text: data.text, done: data.done };
      todos[i] = updatedTodo;
      break;
    }
  }
  writeTodos(todos);
  if (!flag) {
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
  let todos = readTodos();
  if (!id) {
    res.status(404).json({
      message: "Fields may be empty!",
    });
    return;
  }
  if (todos.length == 0) {
    res.status(404).json({
      message: "todo is empty!",
    });
    return;
  }

  let flag = true;
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      flag = false;
      todos.splice(i, 1);
      break;
    }
  }
  if (flag) {
    res.status(404).json({
      success: false,
      message: "todo is not found",
    });
    return;
  }
  writeTodos(todos);
  res.status(200).json({
    success: true,
    message: "todo is deleted successfully",
  });
}
// ////////////////////////////// Listening //////////////////////////////// //

app.listen(port, function () {
  console.log(`Listening at port ${port}...`);
});
