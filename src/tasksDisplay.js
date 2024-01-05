import { Projects } from "./projects.js";

const loadTasks = () => {
  // Create a container for tasks
  const tasksContainer = document.createElement("div");
  tasksContainer.classList.add("task-container");

  // Clear any existing content in the tasks container
  tasksContainer.innerHTML = "";

  // Create a new project instance
  const projectOne = new Projects("Project One");

  // Add tasks to the project
  projectOne.addTaskToProject(
    "Task 1",
    "Description for Task 1",
    "2024-01-10",
    "High"
  );
  projectOne.addTaskToProject(
    "Task 1",
    "Description for Task 1",
    "2024-01-10",
    "High"
  );

  // Loop through each task in the project
  for (let i = 0; i < projectOne.tasks.length; i++) {
    const task = projectOne.tasks[i];

    // Create a card for each task
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

    // Create elements for task details: name, description, due date, and priority
    const nameElement = document.createElement("h2");
    nameElement.textContent = `${task.name}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `${task.description}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Due: ${task.dueDate}`;

    const priorityElement = document.createElement("p");
    priorityElement.textContent = `Priority: ${task.priority}`;

    // Create a button to remove the task
    const removeTask = document.createElement("button");
    removeTask.textContent = "Remove Task";
    removeTask.dataset.index = i;

    // Append task details and remove button to the task card
    taskCard.appendChild(nameElement);
    taskCard.appendChild(descriptionElement);
    taskCard.appendChild(dateElement);
    taskCard.appendChild(priorityElement);
    taskCard.appendChild(removeTask);

    // Append the task card to the tasks container
    tasksContainer.appendChild(taskCard);
  }

  // Return the tasks container
  return tasksContainer;
};

export { loadTasks };
