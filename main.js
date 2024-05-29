import "./src/styles/main.css";
import { hamburgerMenu } from "./src/utils/hamburger.js";
import VanillaTilt from "vanilla-tilt";
// import { Collapse } from "flowbite";

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

hamburgerMenu();

let cursorX = 0;
let cursorY = 0;
const cursorSize = 130; // Set the size of your cursor

document.addEventListener("mousemove", (e) => {
  cursorX = e.clientX - cursorSize / 2;
  cursorY = e.clientY - cursorSize / 2;
  requestAnimationFrame(updateCursor);
});

document.addEventListener("scroll", function () {
  requestAnimationFrame(updateCursor);
});

function updateCursor() {
  const cursor = document.querySelector(".cursor");
  cursor.style.width = `${cursorSize}px`;
  cursor.style.height = `${cursorSize}px`;
  cursor.style.transform = `translate(${cursorX}px, ${
    cursorY + window.scrollY
  }px)`;
}

const heroParallax = document.getElementById("hero-parallax");
const heroTitle = document.getElementById("hero_title");
const projects = document.getElementById("projects");

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  heroParallax.style.transform = "translateY(" + scrollPosition * 1.5 + "px)";
  heroParallax.style.opacity = 1 - scrollPosition / 600;
  heroTitle.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  heroTitle.style.opacity = 2.5 - scrollPosition / 500;
  // projects.style.opacity = 3 - scrollPosition / 600;
});

const observerRight = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-right");
      } else {
        entry.target.classList.remove("show-right");
      }
    });
  },
  // { threshold: 0.5 }
);

const hiddenElementsRight = document.querySelectorAll(".observer-right");
hiddenElementsRight.forEach((element) => {
  observerRight.observe(element);
});

const observerLeft = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-left");
      } else {
        entry.target.classList.remove("show-left");
      }
    });
  },
  // { threshold: 0.5 }
);

const hiddenElementsLeft = document.querySelectorAll(".observer-left");
hiddenElementsLeft.forEach((element) => {
  observerLeft.observe(element);
});

function detectBrowserAndApplyStyles() {
  const body = document.body;
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  if (isFirefox) {
    // If user is using Firefox, remove .static-tv and add .bg-image
    body.classList.remove("static-tv");
    body.classList.add("bg-image");
  }
}

window.onload = function () {
  detectBrowserAndApplyStyles();
};
