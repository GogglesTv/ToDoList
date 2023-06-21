import "./style.css";
import { githubLogo } from "./images";

const footer = document.createElement("footer");

function createFooter() {
  const copyright = document.createElement("p");
  copyright.innerHTML = "© 2021 GogglesTv";
  footer.append(githubLogo, copyright);
}

export { footer, createFooter };
