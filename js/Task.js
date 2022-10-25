// display the todo in the DOM et al;
class DisplayElements {
  // the init method to set all default params
  init(todoArr) {
    this.data = todoArr;
  }

  // accepts the lists DOM element and maps the todos to the DOM
  displayData(lists) {
    lists.innerHTML = "";
    this.data.forEach(function (item) {
      let template = `
                <p>
                    <span>Tache: ${item._todoname} - Importance: ${item._importance}</span>
                    <button class="detail" data-id = ${item._id}>Afficher le detail</button>
                    <button class="remove" data-id = ${item._id}>Supprimer</button>
                </p>
            `;
      lists.insertAdjacentHTML("beforeend", template);
    });
  }

  addData(todo) {
    //   Pushing the Todo Into the Array
    this.data.push(todo);
  }

  getTodo() {
    // returns the most recent instance of the todo list
    return this.data;
  }

  //   This method that clears input fields after a task is added. It accepts 3 DOM elements
  clearInput(todoname, description, importance) {
    todoname.value = "";
    description.value = "";
    for (let i = 0; i < importance.length; i++) importance[i].checked = false;
  }

  //   This method adds an event listener to the todo. Whenever the remove button is clicked, it confirms it by checking the class name and then removes the todo from the array. Moreover, when the details button is clicked, it updates the details pane. I hope this isnt confusing.
  removeTodo(e, detail) {
    let btnId = e.target.dataset.id;

    if (e.target.classList.contains("remove")) {
      e.target.parentElement.remove();
      //remove from array.
      this.removeArrayTodo(btnId);
    } else {
      let desc = this.data.filter(function (item) {
        return item._id === +btnId;
      })[0];
      if (desc._description === "") {
        desc._description = "No description available";
      }
      let displayData = `
                <p>Tache: ${desc._todoname}</p>
                <p>Description: ${desc._description}</p>
                <p>importance: ${desc._importance}</p>
            `;
      detail.innerHTML = displayData;
    }
  }

  //   Simply removes an id from an array
  removeArrayTodo(id) {
    this.data = this.data.filter(function (item) {
      return item._id !== +id;
    });
    console.log(this.data);
  }

  //   This method checking for the presence of an error and then promptly changing the text colour via CSS
  checkError(todoname, name_text, importance, importance_text) {
    if (todoname.value === "") {
      name_text.style.color = "red";
    } else {
      name_text.style.color = "black";
    }
    if (importance.value === "") {
      importance_text.style.color = "red";
    } else {
      importance_text.style.color = "black";
    }
  }
}
