import React from "react";
import { json, scaleLinear, max, scaleBand, range, paddingInner, paddingOuter } from 'd3'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const url = 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/main/expense-chart/data.json'

  const [data, setData] = React.useState('')
  const [width, setWidth] = React.useState(0)
  const height = 200

  React.useEffect(() => {
    json(url)
      .then(data => {
        setData(data)
      })
  }, [])

  React.useEffect(() => {
    const el = document.getElementById('root')
    // remove padding of 'main' parent element
    setWidth(el.clientWidth - 50)
  })

  // margin for svg
  const margin = { top: 65, bottom: 15, right: 0, left: 0 }

  // highest value for scale
  const highestVal = max(data, (d) => d.amount)

  // y-axis scale for bar height
  const yScale = scaleLinear()
    .domain([0, highestVal])
    .range([0, height - margin.bottom - margin.top])

  const xScale = scaleBand()
    .domain(range(7))
    .range([0, width - margin.right - margin.left])

  // console.log('highest:', highestVal, 'data: ', data);
  return (
    <AppContext.Provider
      value={{
        data,
        width,
        margin,
        yScale,
        height,
        xScale,
        highestVal,
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