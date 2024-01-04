import Projects from "./projects.js";

const loadTasks = () => {
  const tasksContainer = document.createElement("div");
  tasksContainer.classList.add("task-container");

  tasksContainer.innerHTML = "";

  const projectOne = {
    name: "Project One",
    tasks: [
      {
        name: "Task 1",
        description: "Description for Task 1",
        dueDate: "2024-01-10",
        priority: "High",
      },
    ],
  };

  for (let i = 0; i < projectOne.tasks.length; i++) {
    const task = projectOne.tasks[i];

    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = `${task.name}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `${task.description}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Due: ${task.dueDate}`;

    const priorityElement = document.createElement("p");
    priorityElement.textContent = `Priority: ${task.priority}`;

    const removeTask = document.createElement("button");
    removeTask.textContent = "Remove Task";
    removeTask.dataset.index = i;

    taskCard.appendChild(nameElement);
    taskCard.appendChild(descriptionElement);
    taskCard.appendChild(dateElement);
    taskCard.appendChild(priorityElement);
    taskCard.appendChild(removeTask);

    tasksContainer.appendChild(taskCard);
  }

  return tasksContainer;
};

export { loadTasks };
