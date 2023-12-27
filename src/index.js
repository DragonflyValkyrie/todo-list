import './style.css';
import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

const contentDiv = document.getElementById('content');

// Load and append header to content
const header = loadHeader();
contentDiv.appendChild(header);

// Load and append footer to content
const footer = loadFooter();
contentDiv.appendChild(footer);