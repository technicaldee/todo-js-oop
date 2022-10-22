// display the todo in the DOM;
class UI {
  constructor(todoAr) {
    this.data = todoArr;
  }

  //   accepts the lists DOM element and maps the todos to the DOM
  displayData(lists) {
    let displayData = this.data.map((item) => {
      return `
                <p>
                    <span>Tache: ${item.todoname} - Importance: ${item.importance}</span>
                    <button class="detail" data-id = ${item.id}>Afficher le detail</button>
                    <button class="remove" data-id = ${item.id}>Supprimer</button>
                </p>
            `;
    });
    lists.innerHTML = displayData.join(" ");
  }

  //   A static method that clears input fields after a task is added. It accepts 3 DOM elements
  static clearInput(todoname, description, importance) {
    todoname.value = "";
    description.value = "";
    for (var i = 0; i < importance.length; i++) importance[i].checked = false;
  }

  //   This method adds an event listener to the todo. Whenever the remove button is clicked, it confirms it by checking the class name and then removes the todo from the array. Moreover, when the details button is clicked, it updates the details pane. I hope this isnt confusing.
  removeTodo(lists, detail) {
    lists.addEventListener("click", (e) => {
      let btnId = e.target.dataset.id;

      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        //remove from array.
        this.removeArrayTodo(btnId);
      } else {
        let data = this.data.filter((item) => item.id === +btnId)[0];
        if (data.description === "")
          data.description = "No description available";
        let displayData = `
                <p>Tache: ${data.todoname}</p>
                <p>Description: ${data.description}</p>
                <p>importance: ${data.importance}</p>
            `;
        detail.innerHTML = displayData;
      }
    });
  }

  //   Simply removes an id from an array
  removeArrayTodo(id) {
    this.data = this.data.filter((item) => item.id !== +id);
  }

  //   A static method checking for the presence of an error and then promptly changing the text colour via CSS
  static checkError(todoname, name_text, importance, importance_text) {
    todoname.value === ""
      ? (name_text.style.color = "red")
      : (name_text.style.color = "black");
    importance.value === ""
      ? (importance_text.style.color = "red")
      : (importance_text.style.color = "black");
  }
}
