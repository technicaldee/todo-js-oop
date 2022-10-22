class Sort {
  // A static method. Accepts an array of todos
  static sortTasksAlphabet(tasks) {
    // compares each todo name. If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0. The returned value is used to order the todo name alphabetically
    return tasks.sort(function (a, b) {
      if (a.todoname > b.todoname) return 1;
      if (b.todoname > a.todoname) return -1;
      return 0;
    });
  }

  // A static method. Accepts an array of todos
  static sortTasksImportance(tasks) {
    // compares each todo importance. If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0. The returned value is used to order the todo by importance
    return tasks.sort(function (a, b) {
      if (a.importance > b.importance) return 1;
      if (b.importance > a.importance) return -1;
      return 0;
    });
  }
}
