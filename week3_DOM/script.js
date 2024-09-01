// let cntr = 0;
// let txt = document.querySelectorAll("p")[1];

// function stopwatch() {
//   txt.innerHTML = cntr;
//   console.log(cntr);
//   cntr += 1;
// }

// // setInterval(stopwatch, 1000);

// console.log("DOM, You can build as well");
// // console.log(document);
// function addTodo() {
//   const todoItem = document.querySelector("input").value;
//   console.log(todoItem);
//   todoItem.innerHTML = " ";
// }

// function deleteTodo(index) {
//   let element = document.getElementById("todo-" + index);
//   element.parentNode.removeChild(element);
//   console.log(index);
// }

// function addTodo() {
//   let todoContent = document.querySelector("input").value;
//   let newTodo = document.createElement("p");
//   newTodo.innerHTML = todoContent;
//   let parentDiv = document.getElementById("todos");
//   parentDiv.appendChild(newTodo);
// }

function updateTodo(index) {
  let todoItem = document.getElementById("todo-content-" + index);
  let updatedTodo = document.querySelector("input").value;
  todoItem.innerText = updatedTodo;
}

function deleteTodo(index) {
  let todoEle = document.querySelector("#todo-" + index);
  console.log(todoEle.parentNode);
  todoEle.parentNode.removeChild(todoEle);
}

let cntr = 2;
function addTodo() {
  let todoContent = document.querySelector("input").value;
  let todoParent = document.querySelector(".content");
  let newTodoDiv = document.createElement("div");
  newTodoDiv.setAttribute("class", "todoItem");
  newTodoDiv.setAttribute("id", "todo-" + cntr);
  // let content = document.createElement("p");
  // content.innerHTML = todoContent;
  // newTodoDiv.appendChild(content);

  // let deleteBtn = document.createElement("button");
  // let updateBtn = document.createElement("button");

  // deleteBtn.innerHTML = "Delete";
  // updateBtn.innerHTML = "Update";

  // newTodoDiv.appendChild(deleteBtn);
  // newTodoDiv.appendChild(updateBtn);
  // todoParent.appendChild(newTodoDiv);

  newTodoDiv.innerHTML = `<p id="todo-content-${cntr}">${todoContent}</p>
            <button onclick="deleteTodo(${cntr})">Delete</button>
            <button onclick="updateTodo(${cntr})">Update</button>`;

  cntr += 1;

  todoParent.appendChild(newTodoDiv);
}
