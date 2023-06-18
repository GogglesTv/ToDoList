console.log("index here!");
import "./style.css";
import { headerContents, createHeader, hamburgerIcon } from "./header.js";
import {
  sidebarElements,
  createSidebar,
  allTasksContainer,
  todayTasksContainer,
  next7DaysTasksContainer,
  importantTasksContainer,
  addProjectButton,
} from "./sidebar.js";
import { footer, createFooter } from "./footer";

const container = document.getElementById("content");

// HEADER
createHeader();
const navBar = document.createElement("header");
navBar.append(headerContents);

// BODY CONTAINER
const bodySection = document.createElement("section");
bodySection.classList.add("body-section");

// SIDEBAR
createSidebar();
let sidebarAppended = true;
const sidebar = document.createElement("section");
sidebar.append(sidebarElements);
bodySection.append(sidebar);

// FOOTER
footer.append(createFooter());

// HEADER AND BODY ELEMENTS APPENDED TO CONTAINER
container.append(navBar, bodySection, footer);

hamburgerIcon.addEventListener("click", () => {
  if (sidebarAppended === true) {
    bodySection.removeChild(sidebar);
    sidebarAppended = false;
  } else {
    bodySection.append(sidebar);
    sidebarAppended = true;
  }
});
