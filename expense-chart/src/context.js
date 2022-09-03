import React from "react";
import { json, scaleLinear, max, scaleBand, range } from 'd3'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const url = 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/main/expense-chart/data.json'

  const [data, setData] = React.useState('')
  const [width, setWidth] = React.useState(0)
  const height = 270

  React.useEffect(() => {
    json(url)
      .then(data => {
        setData(data)
      })
  }, [])

  React.useEffect(() => {
    const el = document.getElementById('root')
    setWidth(el.clientWidth)
  })

  // margin for svg
  const margin = { top: 5, bottom: 5, right: 5, left: 5 }

  // highest value for scale
  const highestVal = max(data, (d) => d.amount)

  // y-axis scale for bar height
  const yScale = scaleLinear()
    .domain([0, highestVal])
    .range([margin.top, height - margin.bottom])

  const xScale = scaleBand()
    .domain(range(7))
    .range([margin.left, width - margin.right])

  // console.log('highest:', highestVal, 'data: ', data);
  return (
    <AppContext.Provider
      value={{
        data,
        width,
        margin,
        yScale,
        height,
        xScale
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppProvider }
export default useGlobalContext