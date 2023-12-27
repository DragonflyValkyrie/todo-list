import inboxImage from './images/inbox.svg';
import calenderTodayImage from './images/calendar-today.svg';
import calenderWeekImage from './images/calendar-week.svg';
// import plusImage from './images/plus.svg';
// import optionsImage from './images/dots-vertical.svg';
// import pojectImage from './images/progress-wrench.svg';


const loadSideBar = () => {

    // Sidebar container creation
    const sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    // Navigation links
    const sidebarLinks = document.createElement('ul');
    sidebarLinks.classList.add('sidebar-links');

    // List of links
    const links = [
        { text: "Inbox", image: inboxImage },
        { text: "Today", image: calenderTodayImage },
        { text: "This week", image: calenderWeekImage }
    ];

    // Loop through the sidebar links to make them list items with anchor tags
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement("li");  
        const a = document.createElement("a");

        a.textContent = links[i];

        // Create the image element for the link
        const img = document.createElement('img');
        img.src = links[i].image;
        img.alt = links[i].text;
        img.style.width = '24px'; 
        img.style.height = '24px';
        img.style.marginRight = '8px';

        a.appendChild(img);
        a.append(links[i].text);

        li.appendChild(a);
        sidebarLinks.appendChild(li);
    }


    sidebarContainer.appendChild(sidebarLinks);

    return sidebarContainer;
};

export { loadSideBar };