export class Projects {
  // Constructor to initialize with a name and an empty array of tasks
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  // Method to add a new task to the project
  addTaskToProject(name, description, dueDate, priority) {
    // Create a new Task instance
    const newTask = new Task(name, description, dueDate, priority);
    // Add the task to the tasks array
    this.tasks.push(newTask);
  }

  // Method to remove a task from the project based on its index
  removeTaskFromProject(index) {
    // Remove the task from the tasks array at the specified index
    this.tasks.splice(index, 1);
  }
}

// Define a Task class to represent an individual task
class Task {
  // Constructor to initialize with name, description, due date, and priority
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // Method to provide information about the task
  info() {
    // Return a string containing details of the task
    return `${this.name}, ${this.description}, ${this.dueDate}, ${this.priority}`;
  }
}
