const links = document.querySelectorAll('li')
const timeframe = document.querySelectorAll('.time-frame')
let currentTimeframe = 'Daily'

for (let link of links) {
  link.style.color = 'hsl(235, 45%, 61%)'
  link.addEventListener('click', (e) => {
    currentTimeframe = e.target.textContent
    e.target.style.color = 'white'
    timeframe.forEach(d => {
      d.innerText = currentTimeframe
    })
  })
}

timeframe.forEach(d => {
  d.innerText = currentTimeframe
})
