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
  sidebarProjectsContainer,
  addProjectButton,
  newProjectForm,
  input,
  createProjectForm,
  addBtn,
  cancelBtn,
} from "./sidebar.js";
import { footer, createFooter } from "./footer";
import { hamburger, threeVertDots } from "./images";

const container = document.getElementById("content");

const projects = [];
const newProjects = document.createElement("section");
newProjects.classList.add("new-projects");

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

// HAMBURGER ICON APPENDS/REMOVES SIDEBAR
hamburgerIcon.addEventListener("click", () => {
  if (sidebarAppended === true) {
    bodySection.removeChild(sidebar);
    sidebarAppended = false;
  } else {
    bodySection.append(sidebar);
    sidebarAppended = true;
  }
});

createProjectForm();
addProjectButton.addEventListener("click", () => {
  if (!sidebarProjectsContainer.contains(newProjectForm)) {
    console.log("add project button");
    sidebarProjectsContainer.removeChild(addProjectButton);
    sidebarProjectsContainer.append(newProjectForm, addProjectButton);
  }

  if (sidebarProjectsContainer.contains(newProjects)) {
    newProjectForm.style.marginTop = "30px";
  }

  console.log(input.value);
});

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    projects.push(input.value);
    sidebarProjectsContainer.removeChild(newProjectForm);
  }
  newProjects.innerHTML = "";

  // CREATES ELEMENTS FOR NEW PROJECT
  for (let i = 0; i <= projects.length - 1; i++) {
    const newProject = document.createElement("div");
    newProject.classList.add("new-project");

    const projectNameLeft = document.createElement("div");
    const hamburgerIcon2 = document.createElement("div");
    hamburgerIcon2.innerHTML = hamburger.innerHTML;
    hamburgerIcon2.classList.add("hamburger");
    const newProjectName = document.createElement("p");
    newProjectName.innerHTML = projects[i];

    const projectNameRight = document.createElement("div");
    const dotsIcon = document.createElement("div");
    dotsIcon.classList.add("dots-icon");
    dotsIcon.innerHTML = threeVertDots.innerHTML;

    newProjects.append(newProject);
    newProject.append(projectNameLeft, projectNameRight);
    projectNameLeft.append(hamburgerIcon2, newProjectName);
    projectNameRight.append(dotsIcon);
    sidebarProjectsContainer.append(newProjects, addProjectButton);
  }

  input.value = "";
  console.log("project added", projects);
});

cancelBtn.addEventListener("click", () => {
  sidebarProjectsContainer.removeChild(newProjectForm);
});

console.log();
