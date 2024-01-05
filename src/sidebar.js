import inboxImage from "./images/inbox.svg";
import calenderTodayImage from "./images/calendar-today.svg";
import calenderWeekImage from "./images/calendar-week.svg";
import { loadSideBarProjects } from "./sidebarProjects.js";

const loadSideBar = () => {
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

  // Load and append sidebarProjects to sidebar
  const sideProjectContainer = loadSideBarProjects();
  sidebarContainer.appendChild(sideProjectContainer);

  return sidebarContainer;
};

export { loadSideBar };
