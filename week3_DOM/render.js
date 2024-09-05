let todos = [];
let id = 0;

function createComponent(todo) {
  let div = document.createElement("div");
  div.setAttribute("id", `todo-${todo.index}`);
  let title = document.createElement("h3");
  title.innerHTML = todo.text;
  let buttonD = document.createElement("button");
  buttonD.setAttribute("onclick", `deleteTodo(${todo.index})`);
  buttonD.innerHTML = "Delete";
  buttonD.setAttribute("class", "delete");
  div.appendChild(title);
  div.appendChild(buttonD);

  let buttonU = document.createElement("button");
  buttonU.setAttribute("onclick", `updateTodo(${todo.index})`);
  buttonU.setAttribute("class", "update");
  buttonU.innerHTML = "Update";
  div.appendChild(buttonD);
  div.appendChild(buttonU);
  document.querySelector("#todos").appendChild(div);
}

function render() {
  let todosList = document.querySelector("#todos");
  todosList.innerHTML = "";
  todos.forEach((todo) => {
    createComponent(todo);
  });
}

function addTodo() {
  let todo = document.querySelector("input").value;
  if (todo == "") {
    alert("Text field is Empty!");
    return;
  }
  const newTodo = { index: `${id + 1}`, text: `${todo}` };
  todos.push(newTodo);
  id += 1;
  todo = "";
  render();
}

function deleteTodo(index) {
  let newTodo = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].index == index) {
      continue;
    }
    newTodo.push(todos[i]);
  }
  todos = newTodo;
  render();
}

function deleteLast() {
  if (todos.length == 0) {
    alert("Todo is empty!");
    return;
  }
  todos.pop();
  render();
}

function deleteFirst() {
  if (todos.length == 0) {
    alert("Todo is empty!");
    return;
  }
  todos.splice(0, 1);
  render();
}

function updateTodo(index) {
  let updatedTodo = document.querySelector("input").value;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].index == index) {
      let updatedTodoObject = { index, text: `${updatedTodo}` };
      todos[i] = updatedTodoObject;
      break;
    }
  }

  render();
}
