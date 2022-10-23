const links = document.querySelectorAll('li')
const timeframe = document.querySelectorAll('.time-frame')
const currentTimes = document.querySelectorAll('.current-time')
const prevTimes = document.querySelectorAll('.prev-time')
let currentTimeframe = 'daily'
const dataMap = new Map()

for (let link of links) {
  link.addEventListener('click', (e) => {
    currentTimeframe = e.target.textContent.toLowerCase()
    e.target.style.color = 'white'
    changeTimeFrameText()
    changeCurrentAndPrevTime()
  })
}

const changeTimeFrameText = () => {
  timeframe.forEach(d => {
    if (currentTimeframe === 'daily') {
      d.innerText = 'Yesterday'
    } else if (currentTimeframe === 'weekly') {
      d.innerText = 'Last Week'
    } else if (currentTimeframe === 'monthly') {
      d.innerText = 'Last Month'
    }
  })
}

const changeCurrentAndPrevTime = () => {
  fetch('./data.json')
    .then(res => res.json())
    .then(data => showData(data))
    .catch(err => console.log(err))
}

const showData = (data) => {
  data.map(d => {
    dataMap.set(d.title.toLowerCase(), d.timeframes)
  })

  currentTimes.forEach(time => {
    const times = dataMap.get(time.classList[1])
    time.innerText = times[currentTimeframe]['current'] + 'hrs'
  })

  prevTimes.forEach(time => {
    const times = dataMap.get(time.classList[1])
    time.innerText = ' - ' + times[currentTimeframe]['current'] + 'hrs'
  })
}

changeTimeFrameText()
changeCurrentAndPrevTime()
