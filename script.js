const shareMobile = document.querySelector("#mobile");
const shareDesktop = document.querySelector("#desktop");
const profile = document.querySelector(".profile");
const socialMedia = document.querySelector(".social-media");
const cardFooter = document.querySelector(".card-footer");
const popup = document.querySelector(".pop-up");

shareMobile.addEventListener("click", clickMobile);
shareDesktop.addEventListener("click", clickDesktop);

function clickMobile() {
  profile.classList.toggle("d-none") & socialMedia.classList.toggle("d-none");
}

function clickDesktop() {
  popup.classList.toggle("active-desktop");
}
