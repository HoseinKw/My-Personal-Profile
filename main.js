// loader

window.addEventListener("load", function () {
  // Simulate a 3-second loading delay
  setTimeout(function () {
    // After the delay, hide the loading overlay
    var loadingOverlay = document.querySelector(".loader");
    loadingOverlay.style.display = "none";
  }, 1000); // 3000 milliseconds = 3 seconds
});

// Loader

//NavEffect

const menuItems = document.querySelectorAll(".navbar-options li");
const span = document.createElement("span");
span.classList.add("highlight");
document.body.append(span);
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", highlight);
});
function highlight() {
  const itemCoordinates = this.getBoundingClientRect();
  const { left, width, bottom } = itemCoordinates;
  const newWidth = width - 10;
  span.style.width = `${newWidth}px`;
  span.style.transform = `translate(${left}px,${bottom}px)`;
}
menuItems.forEach((item) => {
  item.addEventListener("mouseleave", highlightEnd);
});
function highlightEnd() {
  span.style.width = "0";
}

//NavEffect

//DropDownMenu

const menuIcon = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const hamburgerMenu = document.querySelector(".dropdown-menu");
menuIcon.addEventListener("click", openHamburgerMenu);
function openHamburgerMenu() {
  hamburgerMenu.classList.toggle("open");
  closeMenu.style.display = "block";
  this.style.display = "none";
}
closeMenu.addEventListener("click", closeHamburgerMenu);
function closeHamburgerMenu() {
  hamburgerMenu.classList.toggle("open");
  menuIcon.style.display = "block";
  this.style.display = "none";
}

//DropDownMenu

//TypeEffect

var texts = ["Back-end Developer", "Front-end Developer", "Web Designer"];
var delay = 75;
var element = document.getElementById("typing-text");
var index = 0;
var textIndex = 0;

function typeText() {
  if (index < texts[textIndex].length) {
    element.innerHTML += texts[textIndex].charAt(index);
    index++;
    setTimeout(typeText, delay);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (index > 0) {
    element.innerHTML = texts[textIndex].substring(0, index - 1);
    index--;
    setTimeout(eraseText, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(typeText, 0);
  }
}
typeText();

//TypeEffect

//ProgressAnimation

function animatePercentage(progressBarId, progress) {
  var progressText = document.getElementById(progressBarId);
  var currentProgress = 0;
  var stepDuration = 30;

  var interval = setInterval(function () {
    if (currentProgress >= progress) {
      clearInterval(interval);
      currentProgress = progress;
    }
    progressText.textContent = currentProgress + "%";
    currentProgress++;
  }, stepDuration);
}

animatePercentage("progress-text-1", 60);
animatePercentage("progress-text-2", 50);
animatePercentage("progress-text-3", 70);
animatePercentage("progress-text-4", 70);
animatePercentage("progress-text-5", 50);
animatePercentage("progress-text-6", 40);

//ProgressAnimation

//Slider

const images = document.querySelectorAll(".img-container .project-img");
const dotsContainer = document.querySelector(".dots-container");
const imagesContainer = document.querySelector(".img-container");
images.forEach((item, index) => {
  const span = document.createElement("span");
  span.classList.add("dots");
  span.setAttribute("position", index);
  span.addEventListener("click", slideImg);
  dotsContainer.appendChild(span);
});

let imgWidth = window.getComputedStyle(images[0]).getPropertyValue("width");
imgWidth = Number(imgWidth.match(/\d+/));

function slideImg(e) {
  const position = e.target.getAttribute("position");
  imagesContainer.style.transform = `translateX(-${imgWidth * position}px)`;
  dotsContainer
    .querySelectorAll(".dots")
    .forEach((item) => (item.style.opacity = "0.5"));
  e.target.style.opacity = "1";
}

//Slider
