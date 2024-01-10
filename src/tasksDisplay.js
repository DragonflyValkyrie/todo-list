// Create Modal Overlay Element
const modalOverlay = document.createElement("div");
modalOverlay.id = "modalOverlay";
modalOverlay.classList.add("modal-overlay");
document.body.appendChild(modalOverlay);

// Create Modal Content Element
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modalOverlay.appendChild(modalContent);

// Function to load tasks for a given project
const loadTasks = (projectName, tasksContainer) => {
  // If tasksContainer is not provided, create a new one
  if (!tasksContainer) {
    tasksContainer = document.createElement("div");
    tasksContainer.classList.add("task-container");
  } else {
    // Clear existing tasks in the container
    tasksContainer.innerHTML = "";
  }

  // Create a new container for the task cards
  const taskCardsContainer = document.createElement("div");
  taskCardsContainer.classList.add("task-cards-container");

  // Loop through each task in the project and create task cards
  for (let i = 0; i < projectName.tasks.length; i++) {
    const task = projectName.tasks[i];
    const taskCard = createTaskCard(task, i, projectName, taskCardsContainer); // Note the change here
    taskCardsContainer.appendChild(taskCard);
  }

  // Append the task cards container to the tasksContainer
  tasksContainer.appendChild(taskCardsContainer);

  // Create "Add Task" button and prepend it to tasksContainer
  createAddTaskButton(projectName, tasksContainer);

  return tasksContainer;
};

// Function to create a task card
const createTaskCard = (task, index, projectName, tasksContainer) => {
  // Create card element
  const taskCard = document.createElement("div");
  taskCard.classList.add("card");

  // Create elements for task details
  const nameElement = document.createElement("h2");
  nameElement.textContent = `${task.name}`;
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `${task.description}`;
  const dateElement = document.createElement("p");
  dateElement.textContent = `Due: ${task.dueDate}`;
  const priorityElement = document.createElement("p");
  priorityElement.textContent = `Priority: ${task.priority}`;

  // Create remove button
  const removeTask = document.createElement("button");
  removeTask.textContent = "Remove Task";
  removeTask.addEventListener("click", () => {
    projectName.removeTaskFromProject(index);
    loadTasks(projectName, tasksContainer);
  });

  // Append elements to task card
  taskCard.appendChild(nameElement);
  taskCard.appendChild(descriptionElement);
  taskCard.appendChild(dateElement);
  taskCard.appendChild(priorityElement);
  taskCard.appendChild(removeTask);

  return taskCard;
};

// Function to create "Add Task" button
const createAddTaskButton = (projectName, tasksContainer) => {
  // Create container for add button
  const addButtonContainer = document.createElement("div");
  addButtonContainer.classList.add("add-button-container");

  // Create "Add Task" button
  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.classList.add("add-task-button");
  addTaskButton.addEventListener("click", () => {
    showAddTaskForm(projectName, tasksContainer);
  });

  // Append add button to container and prepend container to tasksContainer
  addButtonContainer.appendChild(addTaskButton);
  tasksContainer.prepend(addButtonContainer);
};

// Function to show "Add Task" form as a modal
const showAddTaskForm = (projectName, tasksContainer) => {
  // Clear the modal content
  modalContent.innerHTML = "";

  // Show the modal overlay
  modalOverlay.style.display = "block";

  // Create the form and all childs and append it
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const taskNameContainer = document.createElement("div");
  taskNameContainer.classList.add("task-name-container");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Task Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";

  taskNameContainer.appendChild(nameLabel);
  taskNameContainer.appendChild(nameInput);

  const taskDescriptionContainer = document.createElement("div");
  taskDescriptionContainer.classList.add("task-description-container");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  const descriptionInput = document.createElement("textarea");

  taskDescriptionContainer.appendChild(descriptionLabel);
  taskDescriptionContainer.appendChild(descriptionInput);

  const taskDateContainer = document.createElement("div");
  taskDateContainer.classList.add("task-date-container");
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Due Date:";
  const dateInput = document.createElement("input");
  dateInput.type = "date";

  taskDateContainer.appendChild(dateLabel);
  taskDateContainer.appendChild(dateInput);

  const taskPriorityContainer = document.createElement("div");
  taskPriorityContainer.classList.add("taskt-priority-container");
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:";
  const priorityInput = document.createElement("select");
  const priorities = ["Low", "Medium", "High"];

  taskPriorityContainer.appendChild(priorityLabel);
  taskPriorityContainer.appendChild(priorityInput);

  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    priorityInput.appendChild(option);
  });

  // Create "Add" button to submit form
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.addEventListener("click", () => {
    // Retrieve form data and add task to project
    const name = nameInput.value;
    const description = descriptionInput.value;
    const dueDate = dateInput.value;
    const priority = priorityInput.value;
    projectName.addTaskToProject(name, description, dueDate, priority);
    loadTasks(projectName, tasksContainer);
    // Close the modal
    modalOverlay.style.display = "none";
  });

  // Create a close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", () => {
    // Close the modal
    modalOverlay.style.display = "none";
  });

  // Append elements to form container and then to modal content
  formContainer.appendChild(closeButton);
  formContainer.appendChild(taskNameContainer);
  formContainer.appendChild(taskDescriptionContainer);
  formContainer.appendChild(taskDateContainer);
  formContainer.appendChild(taskPriorityContainer);
  formContainer.appendChild(addButton);

  modalContent.appendChild(formContainer);
};

export { loadTasks };
