import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [activeImg, setActiveImg] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [itemAdded, setItemAdded] = useState(0)

  return (
    <AppContext.Provider
      value={{
        activeImg,
        setActiveImg,
        quantity,
        setQuantity,
        showCart,
        setShowCart,
        itemAdded,
        setItemAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext