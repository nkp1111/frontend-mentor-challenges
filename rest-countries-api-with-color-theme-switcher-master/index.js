const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

const url = 'https://restcountries.com/v3.1/'

let countrys
let regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
const getCountrys = (url) => {
  const countryData = axios.get(url)
    .then(data => data.data)
    .catch(err => console.log(err))
  return countryData
}

app.get('/', async (req, res) => {
  countrys = await getCountrys(url + 'name/unit')
  console.log(countrys)
  res.render('index', { countrys: countrys.slice(0, 12), regions })
})

app.post('/country', async (req, res) => {

  const { name, region } = req.body
  const byName = 'name/' + name
  const byRegion = 'region/' + region
  console.log(req.body);
  res.send('country')
})

app.listen(3000, () => {
  console.log('Active on port 3000')
})
