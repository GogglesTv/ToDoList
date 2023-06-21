import "./style.css";

import { hamburger, checkmark, sun, moon } from "./images.js";

const headerContents = document.createElement("div");
headerContents.classList.add("header-contents");
const hamburgerIcon = document.createElement("div");

// HEADER ELEMENTS
function createHeader() {
  hamburgerIcon.innerHTML = hamburger.innerHTML;

  const pageTitle = document.createElement("div");
  const title1 = document.createElement("p");
  title1.innerHTML = "My";
  const title2 = document.createElement("p");
  title2.innerHTML = "ToDos";
  pageTitle.append(checkmark, title1, title2);

  const screenMode = document.createElement("div");
  screenMode.classList.add("toggle");
  const input = document.createElement("input");
  input.classList.add("screen-mode");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "darkmode-toggle");
  const label = document.createElement("label");
  label.classList.add("screen-mode");
  label.append(sun, moon);
  label.setAttribute("for", "darkmode-toggle");
  screenMode.append(input, label);
  headerContents.append(hamburgerIcon, pageTitle, screenMode);
}

export { headerContents, createHeader };
