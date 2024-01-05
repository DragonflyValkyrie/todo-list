import plusImage from "./images/plus.svg";
// import optionsImage from "./images/dots-vertical.svg";
// import pojectImage from "./images/progress-wrench.svg";

const loadSideBarProjects = () => {
  const sideProjectContainer = document.createElement("div");
  sideProjectContainer.classList.add("sideproject-container");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("project-titles");
  titleElement.textContent = "Projects";

  // Project links
  const projectLinks = document.createElement("ul");
  projectLinks.classList.add("project-links");

  // Add Projects Button
  const projectAddButton = document.createElement("button");
  projectAddButton.classList.add("project-add-button");
  projectAddButton.textContent = "Add Project";

  // Create an img for image content
  const buttonImage = document.createElement("img");
  buttonImage.src = plusImage;
  buttonImage.alt = "Add Project";
  buttonImage.classList.add("button-image");

  projectAddButton.appendChild(buttonImage);
  sideProjectContainer.appendChild(titleElement);
  sideProjectContainer.appendChild(projectAddButton);

  return sideProjectContainer;
};

export { loadSideBarProjects };
