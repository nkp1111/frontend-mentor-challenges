const hamburderMenuBtn = document.querySelector(".navbar-toggler")

hamburderMenuBtn.addEventListener("click", (e) => {
  let hamImage = hamburderMenuBtn.firstElementChild
  if (hamImage.alt === "hamburger icon") {
    hamImage.alt = "close icon"
    hamImage.src = "./images/icon-close.svg"
  } else {
    hamImage.alt = "hamburger icon"
    hamImage.src = "./images/icon-hamburger.svg"
  }
})