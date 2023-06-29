"use strict";

// get arrows for mobile and desktop designs
const shareArrowMobile = document.querySelector("#share-arrow-mobile");
const shareArrowDesktop = document.querySelector("#share-arrow-desktop");

// get Michelle profile to hide
const meichellProfile = document.querySelector("#profile-name");

// get divs for mobile and desktop active states to show
const activeMobileState = document.querySelector("#share-social-media");
const activeDesktopState = document.querySelector(
  "#share-social-media-desktop"
);

// get the div for desktop arrow share icon
const arrowShareDesktopDiv = document.querySelector(
  "#desktop-active-state-arrow-div"
);

// show social media div for mobile design
shareArrowMobile.addEventListener("click", function () {
  activeMobileState.classList.toggle("hidden");
});

// show social media div for desktop design + hide arrow shape and replace it with circled arrow
shareArrowDesktop.addEventListener("click", () => {
  showHide();
});

// Hide social media div and exit active state for desktop design

arrowShareDesktopDiv.addEventListener("click", () => {
  showHide();
});

function showHide() {
  activeDesktopState.classList.toggle("lg:flex");
  arrowShareDesktopDiv.classList.toggle("hidden");
  shareArrowDesktop.classList.toggle("lg:inline-block");
}
