import "./modal.css"
import React, { useState } from 'react'
import MainModal from "./MainModal"
import CloseModal from './CloseModal'


function Index({ handleModal }) {

  const [pledge, setPledge] = useState(0)
  const [closeModal, setCloseModal] = useState(false)

  const selectPledge = (id) => {
    setPledge(id)
  }

  if (closeModal) {
    return <CloseModal handleModal={handleModal} />
  } else {
    return <MainModal
      pledge={pledge}
      selectPledge={selectPledge}
      setCloseModal={setCloseModal}
      handleModal={handleModal} />
  }
}

export default Index
