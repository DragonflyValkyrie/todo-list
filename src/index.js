import "./style.css";
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSideBar } from "./sidebar.js";
import { loadTasks } from "./tasksDisplay.js";

const contentDiv = document.getElementById("content");

// Load and append header to content
const header = loadHeader();
contentDiv.appendChild(header);

// Load and append sidebar to content
const sideBar = loadSideBar();
contentDiv.appendChild(sideBar);

// Load and append tasks to content
const tasksContent = loadTasks();
contentDiv.appendChild(tasksContent);

// Load and append footer to content
const footer = loadFooter();
contentDiv.appendChild(footer);
