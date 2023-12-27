import menuImage from './images/menu.svg'
import logo from './images/logo.svg'

const loadHeader = () => {
    
    // Header container creation
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    
    // Menu Button
    const navMenu = document.createElement("img");
    navMenu.classList.add("menu-button");
    navMenu.src = menuImage;
    navMenu.alt = 'Menu';
    navMenu.style.width = '30px';
    navMenu.style.height = 'auto';

    // Title
    const titleElement = document.createElement("h1");
    titleElement.textContent = "Todo List";

    // Logo
    const logoImage = document.createElement("img");
    logoImage.classList.add("logo");
    logoImage.src = logo;
    logoImage.alt = 'logo';
    logoImage.style.width = '30px';
    logoImage.style.height = 'auto';

    // Append to header container
    headerContainer.appendChild(navMenu);
    headerContainer.appendChild(titleElement);
    headerContainer.appendChild(logoImage);

    return headerContainer;
};

export { loadHeader };