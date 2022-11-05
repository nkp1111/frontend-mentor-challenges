const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

const url = 'https://restcountries.com/v3.1/name/united'

axios.get(url)
  .then(d => setCountrys(d))
  .catch(err => console.log(err))

let countrys
const setCountrys = (data) => {
  countrys = data.data.slice(0, 8)
  // countrys = data.slice(0, 8)
}

app.get('/', (req, res) => {
  console.log(countrys && countrys[0].name.official, countrys[0].population, countrys[0].region, countrys[0].flags.svg);
  // detail
  console.log(countrys[0].name.nativeName, countrys[0].subregion, countrys[0].capital)
  res.render('index', { countrys })
})

app.listen(3000, () => {
  console.log('Active on port 3000')
})
