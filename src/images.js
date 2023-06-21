const hamburger = document.createElement("div");
hamburger.innerHTML = `<svg class='hamburger' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="48">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fill-rule="evenodd"/> </g>

</svg>`;

const threeVertDots = document.createElement("div");
threeVertDots.innerHTML = `<svg class="three-dots" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-three-dots-vertical">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> </g>

</svg>`;

const checkmark = document.createElement("img");
checkmark.setAttribute("src", "../images/check-mark-button.png");
checkmark.classList.add("checkmark");

const sun = document.createElement("img");
sun.setAttribute("src", "../images/sun.png");
sun.classList.add("sun");

const moon = document.createElement("img");
moon.setAttribute("src", "../images/moon.png");
moon.classList.add("moon");

const dateNumber = document.createElement("img");
dateNumber.setAttribute("src", "../images/date-number.png");
hamburger.classList.add("hamburger");

const inbox = document.createElement("img");
inbox.setAttribute("src", "../images/inbox.png");
inbox.classList.add("inbox");

const star = document.createElement("img");
star.setAttribute("src", "../images/star.png");
star.classList.add("star");

const todayArrow = document.createElement("img");
todayArrow.setAttribute("src", "../images/today-arrow.png");
todayArrow.classList.add("today-arrow");

const addIcon = document.createElement("img");
addIcon.setAttribute("src", "../images/add-plus-circle.png");
addIcon.classList.add("add-icon");

const githubLogo = document.createElement("img");
githubLogo.setAttribute("src", "../images/github-logo.png");
githubLogo.classList.add("github-logo");

export {
  hamburger,
  threeVertDots,
  checkmark,
  sun,
  moon,
  dateNumber,
  inbox,
  star,
  todayArrow,
  addIcon,
  githubLogo,
};
