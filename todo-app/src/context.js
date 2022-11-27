import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

let defaultState = {
  mode: "dark",
  todoList: [
    { id: 1, task: "Complete online javascript course" },
    { id: 2, task: "Jog around the park" },
    { id: 3, task: "Meditation" }
  ],
  completed: [],
  todoLeft: 0,
  showTodos: "all"
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
    dispatch({ type: "UPDATE_TODO_LEFT" })
  }

  const removeTodoTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id })
    dispatch({ type: "UPDATE_TODO_LEFT" })
  }

  const changeBackColor = () => {
    /* Add class to body to change background colors */
    if (state.mode === "light") {
      document.querySelector("body").classList.add("light")
    } else {
      document.querySelector("body").classList.remove("light")
    }
  }

  const updateCompleted = (id) => {
    dispatch({ type: "MARK_COMPLETE", payload: id })
    dispatch({ type: "UPDATE_TODO_LEFT" })
  }

  const updateShowTodos = (show) => {
    dispatch({ type: "SHOW_TODOS", payload: show })
  }

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETE" })
  }

  useEffect(() => {
    changeBackColor()
  })

  useEffect(() => {
    dispatch({ type: "UPDATE_TODO_LEFT" })
  }, [])

  console.log(state);
  return (
    <AppContext.Provider
      value={{
        state,
        changeMode,
        addTodoTask,
        removeTodoTask,
        updateCompleted,
        updateShowTodos,
        clearCompleted,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }