import React from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [submit, setSubmit] = React.useState(false)
  // const [error, setError] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit)
  }

  // const handleClick = () => {
  //   setError(!error)
  // }
  return (
    <AppContext.Provider
      value={
        {
          submit,
          handleSubmit,
          // error,
          // handleClick
        }
      }>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export default useGlobalContext
export { AppProvider }