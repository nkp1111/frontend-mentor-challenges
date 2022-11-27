const reducer = (state, action) => {
  let newState
  console.log(state, action.type);
  if (action.type === "CHANGE_MODE") {
    if (state.mode === "dark") {
      newState = { ...state, mode: "light" }
    } else {
      newState = { ...state, mode: "dark" }
    }
    return newState
  }
  throw new Error("UNKNOWN ACTION")
}

export default reducer