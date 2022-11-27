const reducer = (state, action) => {

  let newState
  console.log(action.type);
  if (action.type === "CHANGE_MODE") {
    if (state.mode === "dark") {
      newState = { ...state, mode: "light" }
    } else {
      newState = { ...state, mode: "dark" }
    }
    return newState
  }

  if (action.type === "ADD_TASK") {
    let id = new Date().getTime()
    let newTask = { id, task: action.payload }
    let newTodoList = [...state.todoList, newTask]
    newState = { ...state, todoList: newTodoList, todoLeft: state.todoLeft + 1 }
    return newState
  }

  if (action.type === "REMOVE_TASK") {
    let id = action.payload
    let newTodoList = state.todoList.filter(todo => todo.id !== id)
    let newCompleted = state.completed.filter(todoId => todoId !== id)
    newState = { ...state, todoList: newTodoList, todoLeft: state.todoLeft - 1, completed: newCompleted }
    return newState
  }

  if (action.type === "MARK_COMPLETE") {
    let id = action.payload
    let newCompleted
    if (state.completed.includes(id)) {
      newCompleted = state.completed.filter(todoId => todoId !== id)
    } else {
      newCompleted = [...state.completed, id]
    }

    newState = { ...state, completed: newCompleted }
    return newState
  }

  if (action.type === "UPDATE_TODO_LEFT") {
    let newTodoLeft = state.todoList.length - state.completed.length
    newState = { ...state, todoLeft: newTodoLeft }
    return newState
  }

  if (action.type === "SHOW_TODOS") {
    let show = action.payload
    newState = { ...state, showTodos: show }
    return newState
  }

  if (action.type === "CLEAR_COMPLETE") {
    let newTodoList = state.todoList.filter(todo => !state.completed.includes(todo.id))
    newState = { ...state, todoList: newTodoList, completed: [] }
    return newState
  }

  throw new Error("UNKNOWN ACTION")
}

export default reducer