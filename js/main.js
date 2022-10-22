// instantiating DOM props
const form = document.querySelector("[data-form]");
const order_alphabet = document.querySelector("[order-alphabet]");
const order_importance = document.querySelector("[order-importance]");
const lists = document.querySelector("[data-lists]");
const detail = document.querySelector("[data-detail]");
const todoname = document.querySelector("[data-name]");
const name_text = document.querySelector("[name-text]");
const importance_text = document.querySelector("[importance-text]");
const description = document.querySelector("[data-description]");
const importance = form.elements["importance"];

// An empty array to store todos
let todoArr = [];

// handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   A static function to check for errors. It takes in the DOM elements to execute style methods
  UI.checkError(todoname, name_text, importance, importance_text);

  //   To prevent the rest of the code from running if the fields are empty
  if (todoname.value === "" || importance.value === "") {
    return;
  }

  //   A random id for our todo's
  let id = Math.random() * 1000000;

  //   Instansiating our Todo Class
  const todo = new Todo(
    id,
    todoname.value,
    description.value,
    importance.value
  );

  //   Pushing the Todo Into the Array
  todoArr.push(todo);

  //   Instansiating the UI class to display modified data and clear input
  let display = new UI(todoArr);
  display.displayData(lists);
  UI.clearInput(todoname, description, importance);
});

// handle alphabetical ordering
order_alphabet.addEventListener("click", function (e) {
  // Call the static sort method
  let sortedTodo = Sort.sortTasksAlphabet(todoArr);
  //   Initialize the UI class to show sorted data
  let sortedDisplay = new UI(sortedTodo);
  //   Show the data
  sortedDisplay.displayData(lists);
});

// handle ordering by importance
order_importance.addEventListener("click", function (e) {
  // Call the static sort method
  let sortedTodo = Sort.sortTasksImportance(todoArr);
  //   Initialize the UI class to show sorted data
  let sortedDisplay = new UI(sortedTodo);
  //   Show the data
  sortedDisplay.displayData(lists);
});

//once the browser is loaded
window.addEventListener("DOMContentLoaded", () => {
  // Initialize the UI class
  let display = new UI(todoArr);
  //   Show data and append it to the selected DOM
  display.displayData(lists);
  //remove from the dom
  display.removeTodo(lists, detail);
});
