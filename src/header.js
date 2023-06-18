import "./style.css";

const headerContents = document.createElement("div");
headerContents.classList.add("header-contents");
const hamburgerIcon = document.createElement("div");

// HEADER ELEMENTS
function createHeader() {
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
  headerContents.append(hamburgerIcon, pageTitle, screenMode);
}

export { headerContents, createHeader, hamburgerIcon };
