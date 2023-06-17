console.log("index here!");
import "./style.css";

const container = document.getElementById("content");

// HEADER ELEMENTS
const navBar = document.createElement("header");
const hamburgerIcon = document.createElement("div");
hamburgerIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;
const pageTitle = document.createElement("div");
const titleIcon = document.createElement("div");
titleIcon.classList.add("title-icon");
titleIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>`;
const title1 = document.createElement("p");
title1.innerHTML = "My";
const title2 = document.createElement("p");
title2.innerHTML = "ToDos";
pageTitle.append(titleIcon, title1, title2);

const screenMode = document.createElement("div");
screenMode.classList.add("toggle");
const input = document.createElement("input");
input.setAttribute("type", "checkbox");
input.setAttribute("id", "darkmode-toggle");
const label = document.createElement("label");
label.innerHTML = `<svg class="sun" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" version="1.1">
<path d="M8.031 16.5c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5-3.357-7.5-7.5-7.5c-4.142 0-7.5 3.357-7.5 7.5zM15.531 3.75l-2.109 4.219h4.219l-2.11-4.219zM24.543 7.457l-4.475 1.491 2.982 2.983 1.493-4.474zM10.994 8.948l-4.474-1.491 1.491 4.475 2.983-2.984zM6.969 14.359l-4.219 2.11 4.219 2.109v-4.219zM24.031 18.641l4.219-2.109-4.219-2.109v4.218zM15.531 29.25l2.109-4.219h-4.219l2.11 4.219zM20.068 24.052l4.475 1.491-1.492-4.475-2.983 2.984zM6.52 25.543l4.475-1.491-2.983-2.983-1.492 4.474z"/>
</svg>
<svg class="moon" width="22px" height="22px" viewBox="-2 0 24 24" id="meteor-icon-kit__solid-moon" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.68 20.0771C15.3295 18.7641 13.0869 15.5674 13.0869 11.9568C13.0869 8.34728 15.3297 5.1507 18.68 3.83774C18.8676 3.76728 19.0359 3.6399 19.1565 3.46112C19.4654 3.00329 19.3447 2.38174 18.8868 2.07286C16.8964 0.72996 14.5451 0 12.0869 0C5.41353 0 0 5.35064 0 11.958C0 18.5644 5.41374 23.9149 12.0869 23.9149C14.5451 23.9149 16.8964 23.1849 18.8868 21.842C19.3447 21.5331 19.4654 20.9116 19.1565 20.4538C19.0359 20.275 18.8676 20.1476 18.68 20.0771z" fill="#4d6680"></path></g></svg>`;
label.setAttribute("for", "darkmode-toggle");
screenMode.append(input, label);
navBar.append(hamburgerIcon, pageTitle, screenMode);

// BODY ELEMENTS
const bodySection = document.createElement("section");
bodySection.classList.add("body-section");

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

// SIDEBAR: HOME
const sidebarHomeContainer = document.createElement("section");
sidebarHomeContainer.classList.add("sidebar-home");

const sidebarHomeHeader = document.createElement("h1");
sidebarHomeHeader.innerHTML = "Home";

const sideBarTasks = document.createElement("div");
sideBarTasks.classList.add("sidebar-tasks");

const allTasksContainer = document.createElement("div");
const allTasksImg = document.createElement("img");
allTasksImg.setAttribute("src", "../images/inbox.png");
const allTasks = document.createElement("p");
allTasks.innerHTML = "All Tasks";
allTasksContainer.append(allTasksImg, allTasks);

const todayTasksContainer = document.createElement("div");
const todayTasksImg = document.createElement("img");
todayTasksImg.setAttribute("src", "../images/today-arrow.png");
const todayTasks = document.createElement("p");
todayTasks.innerHTML = "Today";
todayTasksContainer.append(todayTasksImg, todayTasks);

const next7DaysTasksContainer = document.createElement("div");
const next7DaysTasksImg = document.createElement("img");
next7DaysTasksImg.setAttribute("src", "../images/date-number.png");
const next7DaysTasks = document.createElement("p");
next7DaysTasks.innerHTML = "Next 7 Days";
next7DaysTasksContainer.append(next7DaysTasksImg, next7DaysTasks);

const importantTasksContainer = document.createElement("div");
const importantTasksImg = document.createElement("img");
importantTasksImg.setAttribute("src", "../images/star.png");
const importantTasks = document.createElement("p");
importantTasks.innerHTML = "Important";
importantTasksContainer.append(importantTasksImg, importantTasks);

// SIDEBAR: PROJECTS
const sidebarProjectsContainer = document.createElement("section");
sidebarProjectsContainer.classList.add("sidebar-projects");

const sidebarProjectsHeader = document.createElement("h1");
sidebarProjectsHeader.innerHTML = "Projects";

const newProjects = document.createElement("div");
newProjects.classList.add("new-projects");

const addProjectButton = document.createElement("div");
addProjectButton.classList.add("add-project");
addProjectButton.innerHTML = "Add Project";
const add = document.createElement("div");
add.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Circle"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`;
addProjectButton.append(add);

bodySection.append(sidebar);
sidebar.append(sidebarHomeContainer, sidebarProjectsContainer);
sidebarHomeContainer.append(sidebarHomeHeader, sideBarTasks);
sidebarProjectsContainer.append(sidebarProjectsHeader, addProjectButton);
sideBarTasks.append(
  allTasksContainer,
  todayTasksContainer,
  next7DaysTasksContainer,
  importantTasksContainer
);

// FOOTER
const footer = document.createElement("footer");
footer.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>`;
const copyright = document.createElement("p");
copyright.innerHTML = "© 2021 GogglesTv";
footer.append(copyright);
// HEADER AND BODY ELEMENTS APPENDED TO CONTAINER
container.append(navBar, bodySection, footer);
