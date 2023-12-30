class myProjects {
  constructor() {
    this.tasks = [];
  }

  addTaskToProject(title, description, dueDate, priority) {
    const newTasks = new tasks(title, description, dueDate, priority);
    this.tasks.push(newTasks);
  }

  removeTaskFromProject(index) {
    this.tasks.splice(index, 1);
  }
}

class tasks {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
