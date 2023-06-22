import "./style.css";
import {
  hamburger,
  inbox,
  todayArrow,
  dateNumber,
  star,
  addIcon,
} from "./images";

// SIDEBAR CONTAINER
const sidebarElements = document.createElement("div");
sidebarElements.classList.add("sidebar");

const allTasksContainer = document.createElement("div");
const todayTasksContainer = document.createElement("div");
const next7DaysTasksContainer = document.createElement("div");
const importantTasksContainer = document.createElement("div");
const sidebarProjectsContainer = document.createElement("section");
const addProjectButton = document.createElement("div");

function createSidebar() {
  // SIDEBAR: HOME
  const sidebarHomeContainer = document.createElement("section");
  sidebarHomeContainer.classList.add("sidebar-home");

  const sidebarHomeHeader = document.createElement("h1");
  sidebarHomeHeader.innerHTML = "Home";

  const sideBarTasks = document.createElement("div");
  sideBarTasks.classList.add("sidebar-tasks");

  const allTasks = document.createElement("p");
  allTasks.innerHTML = "All Tasks";
  allTasksContainer.append(inbox, allTasks);
  allTasksContainer.style.backgroundColor = "#8fd2ff";
  allTasksContainer.style.borderLeft = "3px solid #0285dd";

  const todayTasks = document.createElement("p");
  todayTasks.innerHTML = "Today";
  todayTasksContainer.append(todayArrow, todayTasks);

  const next7DaysTasks = document.createElement("p");
  next7DaysTasks.innerHTML = "Next 7 Days";
  next7DaysTasksContainer.append(dateNumber, next7DaysTasks);

  const importantTasks = document.createElement("p");
  importantTasks.innerHTML = "Important";
  importantTasksContainer.append(star, importantTasks);

  // SIDEBAR: PROJECTS
  sidebarProjectsContainer.classList.add("sidebar-projects");

  const sidebarProjectsHeader = document.createElement("h1");
  sidebarProjectsHeader.innerHTML = "Projects";

  addProjectButton.classList.add("add-project");
  addProjectButton.innerHTML = "Add Project";
  addProjectButton.append(addIcon);

  sidebarElements.append(sidebarHomeContainer, sidebarProjectsContainer);
  sidebarHomeContainer.append(sidebarHomeHeader, sideBarTasks);
  sidebarProjectsContainer.append(sidebarProjectsHeader, addProjectButton);
  sideBarTasks.append(
    allTasksContainer,
    todayTasksContainer,
    next7DaysTasksContainer,
    importantTasksContainer
  );
}

const newProjectForm = document.createElement("section");
const input = document.createElement("input");

const addCancelBtns = document.createElement("div");
const addBtn = document.createElement("button");
const cancelBtn = document.createElement("button");

function createProjectForm() {
  newProjectForm.classList.add("project-form");

  const formTop = document.createElement("div");
  formTop.classList.add("form-top");
  const label = document.createElement("label");
  label.setAttribute("for", "newProject");
  input.setAttribute("type", "text");
  input.setAttribute("id", "newProject");
  input.setAttribute("name", "newProject");
  input.setAttribute("placeholder", "Enter Project Name");

  const formBottom = document.createElement("div");
  formBottom.classList.add("form-bottom");
  addCancelBtns.classList.add("add-cancel");
  addBtn.classList.add("add-btn");
  addBtn.innerHTML = "Add";
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.innerHTML = "Cancel";

  newProjectForm.append(formTop, formBottom);
  formTop.append(hamburger, label);
  label.append(input);
  formBottom.append(addCancelBtns);
  addCancelBtns.append(addBtn, cancelBtn);
}

export {
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
};
