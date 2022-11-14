import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

  const [activeImg, setActiveImg] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [itemAdded, setItemAdded] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const [media, setMedia] = useState(false)

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

  const handleMedia = (width) => {
    if (width < 650) {
      setMedia(true)
    } else {
      setMedia(false)
    }
  }

  useEffect(() => {
    let width = window.innerWidth
    handleMedia(width)
  })

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
        media
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext