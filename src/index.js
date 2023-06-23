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
  addProject,
  cancelProject,
} from "./sidebar.js";
import {
  toDo,
  newProjects,
  taskContents,
  initialPage,
  taskHeader,
  tasks,
  newProjectTab,
  projects,
} from "./tasks";
import { footer, createFooter } from "./footer";
import { hamburger, threeVertDots } from "./images";

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
bodySection.append(sidebarElements);

// TASKS

initialPage();
bodySection.append(taskContents);

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

allTasksContainer.addEventListener("click", () => {
  taskGroupHighlight(allTasksContainer);
  taskGroupUnhighlight(
    todayTasksContainer,
    next7DaysTasksContainer,
    importantTasksContainer
  );
  taskHeader.innerHTML = "All Tasks";
});

todayTasksContainer.addEventListener("click", () => {
  taskGroupHighlight(todayTasksContainer);
  taskGroupUnhighlight(
    allTasksContainer,
    next7DaysTasksContainer,
    importantTasksContainer
  );
  taskHeader.innerHTML = "Today";
});

next7DaysTasksContainer.addEventListener("click", () => {
  taskGroupHighlight(next7DaysTasksContainer);
  taskGroupUnhighlight(
    allTasksContainer,
    todayTasksContainer,
    importantTasksContainer
  );
  taskHeader.innerHTML = "Next 7 Days";
});

importantTasksContainer.addEventListener("click", () => {
  taskGroupHighlight(importantTasksContainer);
  taskGroupUnhighlight(
    allTasksContainer,
    todayTasksContainer,
    next7DaysTasksContainer
  );
  taskHeader.innerHTML = "Important";
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

addProject.addEventListener("click", () => {
  if (input.value !== "") {
    newProjectTab();
    sidebarProjectsContainer.removeChild(newProjectForm);
    sidebarProjectsContainer.append(newProjects, addProjectButton);
  }

  input.value = "";
  console.log("project added", projects);
});

cancelProject.addEventListener("click", () => {
  sidebarProjectsContainer.removeChild(newProjectForm);
});

function taskGroupHighlight(group) {
  group.style.backgroundColor = "#8fd2ff";
  group.style.borderLeft = "3px solid #0285dd";
  group.style.borderTopRightRadius = "5px";
  group.style.borderBottomRightRadius = "5px";
}

function taskGroupUnhighlight(group1, group2, group3) {
  group1.style.backgroundColor = "";
  group1.style.borderLeft = "";
  group1.style.borderTopRightRadius = "";
  group1.style.borderBottomRightRadius = "";

  group2.style.backgroundColor = "";
  group2.style.borderLeft = "";
  group2.style.borderTopRightRadius = "";
  group2.style.borderBottomRightRadius = "";

  group3.style.backgroundColor = "";
  group3.style.borderLeft = "";
  group3.style.borderTopRightRadius = "";
  group3.style.borderBottomRightRadius = "";
}
