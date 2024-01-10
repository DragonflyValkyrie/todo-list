import "./style.css";
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSideBar } from "./sidebar.js";
import { loadTasks } from "./tasksDisplay.js";
import { Projects } from "./projects.js";

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Array to store projects
  const projectsList = [];

  // Create a default project and add tasks to it
  const defaultProject = new Projects("Project One");
  defaultProject.addTaskToProject(
    "Task 1",
    "Description for Task 1",
    "2024-01-10",
    "High"
  );
  defaultProject.addTaskToProject(
    "Task 2",
    "Description for Task 2",
    "2024-01-10",
    "High"
  );
  defaultProject.addTaskToProject(
    "Task 2",
    "Description for Task 2",
    "2024-01-10",
    "High"
  );
  defaultProject.addTaskToProject(
    "Task 2",
    "Description for Task 2",
    "2024-01-10",
    "High"
  );
  defaultProject.addTaskToProject(
    "Task 2",
    "Description for Task 2",
    "2024-01-10",
    "High"
  );
  defaultProject.addTaskToProject(
    "Task 2",
    "Description for Task 2",
    "2024-01-10",
    "High"
  );
  defaultProject.addTaskToProject(
    "Task 2",
    "Description for Task 2",
    "2024-01-10",
    "High"
  );

  // Add the default project to the projects list
  projectsList.push(defaultProject);

  // Load and append the header to the content div
  const header = loadHeader();
  contentDiv.appendChild(header);

  // Load and append the sidebar with projects to the content div
  const sidebarContainer = loadSideBar(projectsList);
  contentDiv.appendChild(sidebarContainer);

  // Load and append tasks for the default project to the content div
  const tasksContent = loadTasks(defaultProject);
  contentDiv.appendChild(tasksContent);

  // Load and append the footer to the content div
  const footer = loadFooter();
  contentDiv.appendChild(footer);

  const updateSideBar = () => {
    // Clear existing sidebar content
    sidebarContainer.innerHTML = "";

    // Load and append the updated sidebar with projects to the sidebarContainer
    const updatedSidebarContainer = loadSideBar(projectsList);
    sidebarContainer.appendChild(updatedSidebarContainer);
  };

  // Event handling for adding new projects
  sidebarContainer.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("add-button")) {
      const inputField = document.querySelector(".input-field");
      const projectName = inputField.value;

      // Validate the project name
      if (projectName.trim() === "" || projectName.length > 26) {
        alert(
          "Project name should not be blank and should be less than 26 characters."
        );
        return;
      }

      const newProject = new Projects(projectName);
      projectsList.push(newProject);

      // Update the sidebar with the new project
      updateSideBar();

      // Clear the input field
      inputField.value = "";
    }
  });

  document.addEventListener("projectSelected", (event) => {
    const projectName = event.detail.projectName;
    tasksContent.innerHTML = "";

    // Find the corresponding project object in the projects list
    const selectedProject = projectsList.find(
      (project) => project.name === projectName
    );

    if (selectedProject) {
      // Load and append the tasks for the selected project
      const updateTasksContainer = loadTasks(selectedProject);
      tasksContent.appendChild(updateTasksContainer);
    } else {
      console.log(`Project not found: ${projectName}`);
    }
  });
});
