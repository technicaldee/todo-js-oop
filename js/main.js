//once the browser is loaded
window.addEventListener("DOMContentLoaded", function () {
  // instantiating DOM props
  let form = document.querySelector("[data-form]");
  let order_alphabet = document.querySelector("[order-alphabet]");
  let order_importance = document.querySelector("[order-importance]");
  let lists = document.querySelector("[data-lists]");
  let detail = document.querySelector("[data-detail]");
  let importance = form.elements["importance"];
  let todoname = document.querySelector("[data-name]");
  let name_text = document.querySelector("[name-text]");
  let importance_text = document.querySelector("[importance-text]");
  let description = document.querySelector("[data-description]");
  let more = document.querySelector("[data-more]");

  // An empty array to store todos
  let todoArr = [];

  // Instantiate the DisplayElements class
  let display = new DisplayElements();

  // Initialize the DisplayElements class by passing the empty array
  display.init(todoArr);

  //   Show data and append it to the selected DOM on initial load
  display.displayData(lists);

  // handle form submission
  form.addEventListener("submit", function (e) {
    // Prevent the page from refreshing when the submit button is hit.
    e.preventDefault();

    //   A function to check for errors. It takes in the DOM elements to execute style methods
    display.checkError(todoname, name_text, importance, importance_text);

    //   To prevent the rest of the code from running if the fields are empty
    if (todoname.value === "" || importance.value === "") {
      return;
    }

    //   A random id for our todo's
    let id = Math.random() * 1000000;

    //   Instantiating our Todo Class
    let todo = new Todo(
      id,
      todoname.value,
      description.value,
      importance.value
    );

    // add new todo
    display.addData(todo);

    //  Display the data on the DOM. Has to take in the Root DOM element
    display.displayData(lists);

    // Clear the Inputs once the process is done
    display.clearInput(todoname, description, importance);
  });

  // handle the accordion
  more.addEventListener("click", function (e) {
    more.classList.toggle("bottom");
    detail.classList.toggle("shrink");
  });

  // listen for the alphabetical ordering button click action
  order_alphabet.addEventListener("click", function (e) {
    // Instantiate the sort class
    let sort_class = new Sort();

    // sort the tasks by alphabet while passing the most recent todo list by calling the getTodo method which returns the most recent version of the todo list
    let sortedTodo = sort_class.sortTasksAlphabet(display.getTodo());

    // load the sorted tasks into the DisplayElements class
    display.init(sortedTodo);

    // load the new data unto the DOM
    display.displayData(lists);
  });

  // add an event listener for any click on the element
  lists.addEventListener("click", function (e) {
    // call the removeTodo method to check if the remove button or the detail button is clicked
    display.removeTodo(e, detail);
  });

  // handle ordering by importance
  order_importance.addEventListener("click", function (e) {
    // Instantiate the sort method
    let sort_class = new Sort();

    // sort tasks by importance by calling the method and passing in the latest tasks by calling the getTodo method
    let sortedTodo = sort_class.sortTasksImportance(display.getTodo());

    // update the array for all elements
    display.init(sortedTodo);

    // display your new data
    display.displayData(lists);
  });

  // End of DOMContentLoaded
});

// It has been nice working with you 🥰
