import "./modal.css"
import React from 'react'
import { iconCloseModal, articleItems } from '../assets/data'

function Index({ setShowModal }) {
  return (
    <section className="main-modal">
      <div className="main-modal-head">
        <h2>Back this project</h2>
        <div className="close-icon-holder" onClick={() => {
          setShowModal(false)
          document.querySelector("body").classList.remove("modal-view")
        }}>
          <img src={iconCloseModal} alt="close-icon"></img>
        </div>
      </div>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
      </p>

      <div className="article-holder">
        {articleItems.map(item => {
          return (

            <article key={item.id} className={`article ${item.item_left === 0 ? "stock-out" : ""}`}>
              <div className="row">
                <div className='article-info-head col-8 order-2'>
                  <h3>{item.name}</h3>
                  <span className='article-cost'>{item.cost} or more</span>
                </div>
                <input
                  type="radio"
                  className="col-3 order-1 radio-btn"
                  checked={false}></input>
              </div>
              <p>
                {item.description}
              </p>
              <div className='article-info-head'>
                <p className='article-quantity'>{item.item_left} <span>left</span></p>
                <a className='btn'>{item.item_left === 0 ? "Out of Stock" : "Select Reward"}</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Index
