/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(task) {
    this.todos.push(task);
  }

  remove(indexOfTodo) {
    if (this.todos.length <= 0) throw new Error("Todo list is Empty");
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length)
      throw new Error("Invalid Index");

    return this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length)
      throw new Error("Invalid Index");
    return this.todos[indexOfTodo];
  }

  clear() {
    return (this.todos = []);
  }
}

let todo = new Todo();

todo.add("Pencil");
todo.add("Drawing Book");
todo.add("Eraser");

console.log(todo.getAll());
console.log(todo.getAll());
todo.remove(1);
console.log(todo.getAll());
todo.update(0, "Pen");
console.log(todo.getAll());
todo.add("Color Pencils");
console.log(todo.getAll());
console.log(todo.get(0));
console.log(todo.getAll());
// todo.clear();
