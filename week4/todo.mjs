import { Command } from "commander";
import fs, { read } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "todos.json");

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

program
  .name("TODO CLI")
  .description("A simple file based todo")
  .version("1.0.0");

program
  .command("add <todo>")
  .description("Add a new todo")
  .action(function (todo) {
    const todos = readTodos();
    todos.push({ text: todo, done: false });
    writeTodos(todos);
    console.log(`Added: ${todo}`);
  });

program
  .command("delete <index>")
  .description("Delete a todo by its index")
  .action(function (index) {
    let todos = readTodos();
    if (index >= 0 && index < todos.length) {
      const removed = todos.splice(index, 1);
      writeTodos(todos);
      console.log(`Deleted: ${removed[0].text}`);
    } else {
      console.log("Invalid index");
    }
  });

program
  .command("done <index>")
  .description("mark a todo as done")
  .action(function (index) {
    let todos = readTodos();
    if (index >= 0 && index < todos.length) {
      todos[index].done = true;
      writeTodos(todos);
      console.log(`Marked as done: ${todos[index].text}`);
    } else {
      console.log("Invalid index");
    }
  });

program
  .command("update <todo> <index>")
  .description("update the todo")
  .action(function (todo, index) {
    let todos = readTodos();
    if (index >= 0 && index < todos.length) {
      todos[index].text = todo;
      writeTodos(todos);
      console.log(`Updated todo: ${todos[index].text}`);
    } else {
      console.log("Invalid index");
    }
  });

program
  .command("show")
  .description("show todos")
  .action(function () {
    let todos = readTodos();
    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    }
  });

program.parse(process.argv);
