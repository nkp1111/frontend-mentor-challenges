const shareBtnS = document.querySelectorAll(".share-icon-holder")
// to show and hide on click
const authorDiv = document.querySelector(".author")
const shareDiv = document.querySelector(".share-div")

shareBtnS.forEach(btn => {
  btn.addEventListener("click", (e) => {
    authorDiv.classList.toggle("show")
    authorDiv.classList.toggle("hide")
    shareDiv.classList.toggle("show")
    shareDiv.classList.toggle("hide")
  })
})