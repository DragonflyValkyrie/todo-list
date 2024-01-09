// Importing images for the sidebar links
import inboxImage from "./images/inbox.svg";
import calenderTodayImage from "./images/calendar-today.svg";
import calenderWeekImage from "./images/calendar-week.svg";
// import plusImage from "./images/plus.svg";
// import optionsImage from "./images/dots-vertical.svg";
// import pojectImage from "./images/progress-wrench.svg";

// Function to load the sidebar
const loadSideBar = (projectsList) => {
  // Create the main sidebar container
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");

  // Create and append the sidebar links
  const sidebarLinks = createSidebarLinks();
  sidebarContainer.appendChild(sidebarLinks);

  // Create and append the projects section
  const sideProjectContainer = createProjectSection(projectsList);
  sidebarContainer.appendChild(sideProjectContainer);

  return sidebarContainer;
};

// Function to create sidebar links
const createSidebarLinks = () => {
  const sidebarLinks = document.createElement("ul");
  sidebarLinks.classList.add("sidebar-links");

  // Define the list of links with their corresponding images
  const links = [
    { text: "Inbox", image: inboxImage },
    { text: "Today", image: calenderTodayImage },
    { text: "This week", image: calenderWeekImage },
  ];

  // Create list items with anchor tags for each link
  links.forEach((link) => {
    const listItem = document.createElement("li");
    const anchor = createLinkElement(link.text, link.image);
    listItem.appendChild(anchor);
    sidebarLinks.appendChild(listItem);
  });

  return sidebarLinks;
};

// Function to create individual sidebar link element
const createLinkElement = (text, imageSrc) => {
  const anchor = document.createElement("a");

  // Create and append the image element
  const icon = document.createElement("img");
  icon.classList.add("side-icons");
  icon.src = imageSrc;
  icon.alt = text;
  anchor.appendChild(icon);

  // Append the text to the anchor tag
  anchor.append(text);

  return anchor;
};

// Function to create and populate the projects section
const createProjectSection = (projectsList) => {
  const sideProjectContainer = document.createElement("div");
  sideProjectContainer.classList.add("sideproject-container");

  // Create and append the title
  const titleElement = document.createElement("h2");
  titleElement.classList.add("project-titles");
  titleElement.textContent = "Projects";
  sideProjectContainer.appendChild(titleElement);

  // Create and append project items
  projectsList.forEach((project) => {
    const projectItem = createProjectItem(project);
    sideProjectContainer.appendChild(projectItem);
  });

  // Create and append the input field and add button
  const buttonContainer = createButtonContainer();
  sideProjectContainer.appendChild(buttonContainer);

  return sideProjectContainer;
};

// Function to create individual project item
const createProjectItem = (project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  projectItem.textContent = project.name;

  // Add click event listener to the project item
  projectItem.addEventListener("click", () => {
    const event = new CustomEvent("projectSelected", {
      detail: { projectName: project.name },
    });
    document.dispatchEvent(event);
  });

  return projectItem;
};

// Function to create the container for input field and add button
const createButtonContainer = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  // Create input field
  const inputField = document.createElement("input");
  inputField.classList.add("input-field");
  inputField.type = "text";
  inputField.placeholder = "Enter project name";
  buttonContainer.appendChild(inputField);

  // Create add button
  const addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.textContent = "Add";
  buttonContainer.appendChild(addButton);

  return buttonContainer;
};

export { loadSideBar };
