import "./style.css";

// SIDEBAR CONTAINER
const sidebarElements = document.createElement("div");
sidebarElements.classList.add("sidebar");

const allTasksContainer = document.createElement("div");
const todayTasksContainer = document.createElement("div");
const next7DaysTasksContainer = document.createElement("div");
const importantTasksContainer = document.createElement("div");
const addProjectButton = document.createElement("div");

function createSidebar() {
  // SIDEBAR: HOME
  const sidebarHomeContainer = document.createElement("section");
  sidebarHomeContainer.classList.add("sidebar-home");

  const sidebarHomeHeader = document.createElement("h1");
  sidebarHomeHeader.innerHTML = "Home";

  const sideBarTasks = document.createElement("div");
  sideBarTasks.classList.add("sidebar-tasks");

  const allTasksImg = document.createElement("img");
  allTasksImg.setAttribute("src", "../images/inbox.png");
  const allTasks = document.createElement("p");
  allTasks.innerHTML = "All Tasks";
  allTasksContainer.append(allTasksImg, allTasks);

  const todayTasksImg = document.createElement("img");
  todayTasksImg.setAttribute("src", "../images/today-arrow.png");
  const todayTasks = document.createElement("p");
  todayTasks.innerHTML = "Today";
  todayTasksContainer.append(todayTasksImg, todayTasks);

  const next7DaysTasksImg = document.createElement("img");
  next7DaysTasksImg.setAttribute("src", "../images/date-number.png");
  const next7DaysTasks = document.createElement("p");
  next7DaysTasks.innerHTML = "Next 7 Days";
  next7DaysTasksContainer.append(next7DaysTasksImg, next7DaysTasks);

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

  addProjectButton.classList.add("add-project");
  addProjectButton.innerHTML = "Add Project";
  const add = document.createElement("div");
  add.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Circle"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`;
  addProjectButton.append(add);

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

export {
  sidebarElements,
  createSidebar,
  allTasksContainer,
  todayTasksContainer,
  next7DaysTasksContainer,
  importantTasksContainer,
  addProjectButton,
};
