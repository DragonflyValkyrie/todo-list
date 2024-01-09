import inboxImage from "./images/inbox.svg";
import calenderTodayImage from "./images/calendar-today.svg";
import calenderWeekImage from "./images/calendar-week.svg";
// import plusImage from "./images/plus.svg";
// import optionsImage from "./images/dots-vertical.svg";
// import pojectImage from "./images/progress-wrench.svg";

const loadSideBar = (projectsList) => {
  // Sidebar container creation
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");

  // Navigation links
  const sidebarLinks = document.createElement("ul");
  sidebarLinks.classList.add("sidebar-links");

  // List of links
  const links = [
    { text: "Inbox", image: inboxImage },
    { text: "Today", image: calenderTodayImage },
    { text: "This week", image: calenderWeekImage },
  ];

  // Loop through the sidebar links to make them list items with anchor tags
  for (let i = 0; i < links.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    // Append the image to the anchor tag
    const icons = document.createElement("img");
    icons.classList.add("side-icons");
    icons.src = links[i].image;
    icons.alt = links[i].text;

    a.appendChild(icons); // Append the image to the anchor
    a.append(links[i].text); // Append the text to the anchor

    li.appendChild(a);
    sidebarLinks.appendChild(li);
  }

  sidebarContainer.appendChild(sidebarLinks);

  // Create the sidebar container
  const sideProjectContainer = document.createElement("div");
  sideProjectContainer.classList.add("sideproject-container");

  // Create the title element
  const titleElement = document.createElement("h2");
  titleElement.classList.add("project-titles");
  titleElement.textContent = "Projects";

  // Append the title to sideProjectContainer
  sideProjectContainer.appendChild(titleElement);

  // Dynamically create sidebar items for each project
  projectsList.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.textContent = project.name;
    sideProjectContainer.appendChild(projectItem);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  // Input field for adding new project
  const inputField = document.createElement("input");
  inputField.classList.add("input-field");
  inputField.type = "text";
  inputField.placeholder = "Enter project name";
  buttonContainer.appendChild(inputField);

  // Add Project button
  const addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.textContent = "Add";

  // Add the buttons to the sideProjectContainer
  buttonContainer.appendChild(addButton);

  sideProjectContainer.appendChild(buttonContainer);
  sidebarContainer.appendChild(sideProjectContainer);

  return sidebarContainer;
};

export { loadSideBar };
