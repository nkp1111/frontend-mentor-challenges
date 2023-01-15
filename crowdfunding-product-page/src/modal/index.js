import "./modal.css"
import React, { useState } from 'react'
import MainModal from "./MainModal"
import CloseModal from './CloseModal'


function Index({ setShowModal }) {

  const [pledge, setPledge] = useState(0)
  const [closeModal, setCloseModal] = useState(false)

  const selectPledge = (id) => {
    setPledge(id)
  }

  if (closeModal) {
    return <CloseModal setShowModal={setShowModal} />
  } else {
    return <MainModal
      pledge={pledge}
      selectPledge={selectPledge}
      setShowModal={setShowModal}
      setCloseModal={setCloseModal} />
  }
}

export default Index
