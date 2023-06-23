import "./style.css";

import { input } from "./sidebar";
import { hamburger, threeVertDots, addIcon } from "./images";

function toDo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

const projects = [];
const newProjects = document.createElement("section");
newProjects.classList.add("new-projects");

const taskContents = document.createElement("div");
taskContents.setAttribute("id", "taskContents");
const taskHeader = document.createElement("div");

const noTasks = document.createElement("div");
noTasks.classList.add("no-tasks");
noTasks.innerHTML = "Yay! No Tasks!";

const tasks = document.createElement("section");
tasks.classList.add("tasks");

const addTask = document.createElement("div");
addTask.classList.add("add-task");
const addTaskpara = document.createElement("p");

function initialPage() {
  taskHeader.innerHTML = "All Tasks";
  taskHeader.classList.add("task-header");

  taskContents.append(taskHeader, noTasks);
}

// CREATES SIDEBAR ELEMENTS FOR NEW PROJECT
function newProjectTab() {
  noTasks.classList.add("hidden");
  addTaskpara.innerHTML = "Add Task";
  addTask.append(addIcon, addTaskpara);

  tasks.append(addTask);
  taskContents.append(taskHeader, tasks);

  projects.push(input.value);

  const newProject = document.createElement("div");
  newProject.classList.add("new-project");

  if (projects.length === 1) {
    newProject.style.backgroundColor = "#8fd2ff";
    newProject.style.borderLeft = "3px solid #0285dd";
    taskHeader.innerHTML = input.value;
  }

  const projectNameLeft = document.createElement("div");
  const hamburgerIcon2 = document.createElement("div");
  hamburgerIcon2.innerHTML = hamburger.innerHTML;
  hamburgerIcon2.classList.add("hamburger");
  const newProjectName = document.createElement("p");
  newProjectName.innerHTML = input.value;

  const projectNameRight = document.createElement("div");
  const dotsIcon = document.createElement("div");
  dotsIcon.classList.add("dots-icon");
  dotsIcon.innerHTML = threeVertDots.innerHTML;

  newProjects.append(newProject);
  newProject.append(projectNameLeft, projectNameRight);
  projectNameLeft.append(hamburgerIcon2, newProjectName);
  projectNameRight.append(dotsIcon);
}

export {
  toDo,
  newProjects,
  taskContents,
  initialPage,
  taskHeader,
  tasks,
  newProjectTab,
  projects,
};
