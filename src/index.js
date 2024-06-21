console.log("Debug on");

import './style.css';
import {main} from './main.js';
import {menu} from './menu.js';
import {about} from './about.js';
import {footer} from './footer.js';

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

function displayPage(page) {
    content.appendChild(page);
}

function clearContent() {
    content.textContent="";
}

function setActiveButton(button) {
    homeButton.classList="";
    menuButton.classList="";
    aboutButton.classList="";
    button.classList="active";
}

homeButton.addEventListener("click", () => {
    if(homeButton.classList != "active"){
        setActiveButton(homeButton);
        clearContent();
        displayPage(main());
    }
});

menuButton.addEventListener("click", () => {
    if(menuButton.classList != "active"){
        setActiveButton(menuButton);
        clearContent();
        displayPage(menu());
    }
});

aboutButton.addEventListener("click", () => {
    if(aboutButton.classList != "active"){
        setActiveButton(aboutButton);
        clearContent();
        displayPage(about());
    }
});

setActiveButton(homeButton);
displayPage(main());
document.body.appendChild(footer());