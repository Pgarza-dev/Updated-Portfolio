const homeLink = document.getElementById("home-link");
const projectLink = document.getElementById("project-link");
const skillsLink = document.getElementById("skills-link");
const aboutLink = document.getElementById("about-link");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("navMenu");

export function homeButton() {
  homeLink.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isMenuActive = hamburgerMenu.classList.contains("active");

    if (!isMenuActive) {
      console.log("Hamburger menu is closed");
    }
  });
}

export function projectButton() {
  projectLink.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isMenuActive = hamburgerMenu.classList.contains("active");

    if (!isMenuActive) {
      console.log("Hamburger menu is closed");
    }
  });
}

export function skillsButton() {
  skillsLink.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isMenuActive = hamburgerMenu.classList.contains("active");

    if (!isMenuActive) {
      console.log("Hamburger menu is closed");
    }
  });
}

export function aboutButton() {
  aboutLink.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isMenuActive = hamburgerMenu.classList.contains("active");

    if (!isMenuActive) {
      console.log("Hamburger menu is closed");
    }
  });
}

const enhanceText = (id) => {
  const element = document.getElementById(id);

  if (element) {
    const text = element.textContent.split("");
    element.textContent = "";

    text.forEach((letter) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = letter;
      element.append(span);
    });
  }
};

homeButton();
skillsButton();
aboutButton();
enhanceText("project-link");
enhanceText("skills-link");
enhanceText("about-link");
enhanceText("home-link");
enhanceText("about-me");
enhanceText("gmail-link");
enhanceText("linkedIn-link");
enhanceText("gitHub-link");
enhanceText("gmail-footer-link");
enhanceText("linkedIn-footer-link");
enhanceText("gitHub-footer-link");
