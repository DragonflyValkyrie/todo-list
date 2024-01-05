import plusImage from "./images/plus.svg";
// import optionsImage from "./images/dots-vertical.svg";
// import pojectImage from "./images/progress-wrench.svg";

const loadSideBarProjects = () => {
  const sideProjectContainer = document.createElement("div");
  sideProjectContainer.classList.add("sideproject-container");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("project-titles");
  titleElement.textContent = "Projects";

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

  // Add event listener to the "Add Project" button
  projectAddButton.addEventListener("click", () => {
    // Hide the button
    projectAddButton.classList.add("hidden");

    // Create input field
    const inputField = document.createElement("input");
    inputField.classList.add("input-field");
    inputField.type = "text";
    inputField.placeholder = "Enter project name";
    sideProjectContainer.appendChild(inputField);

    // Create buttons container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Create "Add" button
    const addButton = document.createElement("button");
    addButton.classList.add("add-button");

    addButton.textContent = "Add";
    addButton.addEventListener("click", () => {
      // Add project to Projects class
      const projectName = inputField.value;

      console.log(`Project added: ${projectName}`);

      // Remove input field and buttons
      inputField.remove();
      addButton.remove();
      cancelButton.remove();

      // Show the "Add Project" button
      projectAddButton.classList.remove("hidden");
    });
    buttonContainer.appendChild(addButton);

    // Create "Cancel" button
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");

    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
      // Remove input field and buttons
      inputField.remove();
      addButton.remove();
      cancelButton.remove();

      // Show the "Add Project" button
      projectAddButton.classList.remove("hidden");
    });
    buttonContainer.appendChild(cancelButton);
    sideProjectContainer.appendChild(buttonContainer);
  });

  return sideProjectContainer;
};

export { loadSideBarProjects };
