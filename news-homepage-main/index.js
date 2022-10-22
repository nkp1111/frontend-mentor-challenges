const body = document.querySelector('body')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const links = document.querySelectorAll('a')
let width

window.addEventListener('load', (e) => {
  width = window.innerWidth
  navMenuShow(width)
})

window.addEventListener('resize', (e) => {
  width = window.innerWidth
  navMenuShow(width)
})

const navMenuShow = (width) => {
  if (width < 650) {
    body.classList.remove('nav')
  } else {
    body.classList.add('nav')
  }
}

menuBtn.addEventListener('click', () => [
  body.classList.add('active')
])

closeBtn.addEventListener('click', () => [
  body.classList.remove('active')
])

for (let link of links) {
  link.addEventListener('click', () => {
    if (body.classList.contains('active')) {
      body.classList.remove('active')
    }
  })

}