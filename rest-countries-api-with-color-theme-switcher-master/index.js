const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', __dirname + '/views')
app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const url = 'https://restcountries.com/v3.1'

let countrys
let regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
const getCountrys = (url) => {
  const countryData = axios.get(url)
    .then(data => data.data)
    .catch(err => console.log(err))
  return countryData
}

app.get('/', async (req, res) => {
  countrys = await getCountrys(url + '/name/unit')
  res.render('index', { countrys: countrys.slice(0, 12), regions })
})

app.post('/country', async (req, res) => {

  let { name, region } = req.body
  let byName = '/name/' + name
  let byRegion = '/region/' + region
  if (region === '#') {
    region = null
  }
  if (region) {
    countrys = await getCountrys(url + byRegion)
    res.render('index', { countrys, regions })
  }
  if (name) {
    countrys = await getCountrys(url + byName)
    res.render('detailView', { country: countrys[0] })
  }

  res.redirect('/')
})

app.listen('800', () => {
  console.log('Active on port 3000')
})
