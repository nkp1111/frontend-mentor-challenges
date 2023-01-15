import React from 'react'
import { iconCloseModal, articleItems } from '../assets/data'
import ModalArticle from './ModalArticle'

function MainModal({ handleModal, pledge, selectPledge, setCloseModal }) {
  return (
    <section className="main-modal">
      <div className="main-modal-head">
        <h2>Back this project</h2>
        <div className="close-icon-holder" onClick={() => handleModal()}>
          <img src={iconCloseModal} alt="close-icon"></img>
        </div>
      </div>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
      </p>

      <div className="article-holder">
        <NoCostArticle setCloseModal={setCloseModal} />
        {articleItems.map(item => {
          return (
            <ModalArticle key={item.id}
              {...{ item, pledge, selectPledge, setCloseModal }} />
          )
        })}
      </div>
    </section>
  )
}

const NoCostArticle = ({ setCloseModal }) => {
  return (
    <article key="0" className="article">
      <div className="row">
        <div className='article-info-head col-8 order-2'>
          <h3>Pledge with no reward</h3>
        </div>
        <input
          type="radio"
          className="col-3 order-1 radio-btn"
          checked={false}
          onChange={() => {
            setCloseModal(true)
          }}></input>
      </div>
      <p>
        Choose to support us without a reward if you simply believe in our project.As a backer, you will be signed up to receive product updates via email.
      </p>
    </article>
  )
}

export default MainModal
