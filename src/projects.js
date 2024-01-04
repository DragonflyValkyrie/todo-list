class Projects {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTaskToProject(name, description, dueDate, priority) {
    const newTask = new Task(name, description, dueDate, priority);
    this.tasks.push(newTask);
  }

  removeTaskFromProject(index) {
    this.tasks.splice(index, 1);
  }
}

class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  info() {
    return `${this.name}, ${this.description}, ${this.dueDate}, ${this.priority}`;
  }
}
