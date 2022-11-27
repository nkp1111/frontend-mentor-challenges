import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

let defaultState = {
  mode: "dark",
  todoList: [],
  completed: [],
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, defaultState)

  const changeMode = () => {
    /* To change mode */
    dispatch({ type: "CHANGE_MODE" })
  }

  const addTodoTask = (task) => {
    console.log("context", task);
    dispatch({ type: "ADD_TASK", payload: task })
  }

  const changeBackColor = () => {
    /* Add class to body to change background colors */
    if (state.mode === "light") {
      document.querySelector("body").classList.add("light")
    } else {
      document.querySelector("body").classList.remove("light")
    }
  }

  useEffect(() => {
    changeBackColor()
  })

  return (
    <AppContext.Provider
      value={{
        state,
        changeMode,
        addTodoTask
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }