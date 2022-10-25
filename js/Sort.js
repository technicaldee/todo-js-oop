class Sort {
  // This method. Accepts an array of todos
  sortTasksAlphabet(tasks) {
    // compares each todo name. If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0. The returned value is used to order the todo name alphabetically
    return tasks.sort(function (a, b) {
      if (a._todoname > b._todoname) {
        return 1;
      } else if (b._todoname > a._todoname) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  // This method. Accepts an array of todos
  sortTasksImportance(tasks) {
    // compares each todo importance. If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0. The returned value is used to order the todo by importance
    return tasks.sort(function (a, b) {
      if (a._importance > b._importance) {
        return 1;
      } else if (b._importance > a._importance) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
