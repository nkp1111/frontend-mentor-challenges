const shareBtnS = document.querySelectorAll(".share-icon-holder")
// to show and hide on click
const authorDiv = document.querySelector(".author")
const shareDiv = document.querySelector(".share-div")

shareBtnS.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      authorDiv.classList.toggle("show")
      authorDiv.classList.toggle("hide")
    } else {
      shareBtnS[0].classList.toggle("active")
      if (shareBtnS[0].classList.contains("active")) {
        shareBtnS[0].querySelector("img").src = "./images/icon-share-white.svg"
      } else {
        shareBtnS[0].querySelector("img").src = "./images/icon-share.svg"
      }
    }
    shareDiv.classList.toggle("show")
    shareDiv.classList.toggle("hide")
  })
})