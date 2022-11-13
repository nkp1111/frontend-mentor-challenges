import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [activeImg, setActiveImg] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [itemAdded, setItemAdded] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleModalChange = (action) => {
    let newActiveImg
    if (action === 'prev') {
      newActiveImg = activeImg - 1
    }
    if (action === 'next') {
      newActiveImg = activeImg + 1
    }

    if (newActiveImg < 0) {
      newActiveImg = 3
    }
    if (newActiveImg > 3) {
      newActiveImg = 0
    }

    setActiveImg(newActiveImg)
  }

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
        showModal,
        setShowModal,
        handleModalChange,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext