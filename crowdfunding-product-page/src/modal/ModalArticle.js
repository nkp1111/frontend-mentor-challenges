import React, { useState } from 'react'

function ModalArticle({ item, pledge, selectPledge, setCloseModal }) {

  const [currentPledge, setCurrentPledge] = useState(item.cost)
  return (
    <article
      className={`article ${item.item_left === 0 ? "stock-out" : ""} ${pledge === item.id ? "pledge-selected" : ""}`}>
      <div className="row">
        <div className='article-info-head col-8 order-2'>
          <h3>{item.name}</h3>
          <span className='article-cost'>Pledge ${item.cost} or more</span>
        </div>
        <input
          type="radio"
          className="col-3 order-1 radio-btn"
          checked={false}
          onChange={(e) => {
            selectPledge(item.id)
          }}></input>
      </div>
      <p className='article-description'>{item.description}</p>
      <div className='article-info-head'>
        <p className='article-quantity'>{item.item_left} <span>left</span></p>

        <a className='btn'
          onClick={() => {
            selectPledge(item.id)
          }}
          href="#">
          {item.item_left === 0 ? "Out of Stock" : "Select Reward"}
        </a>
      </div>

      {pledge === item.id &&
        <PledgeArea {...{ item, currentPledge, setCurrentPledge, setCloseModal }} />
      }
    </article>
  )
}

const PledgeArea = ({ item, currentPledge, setCurrentPledge, setCloseModal }) => {
  return (
    <div>
      <hr></hr>
      <div className="pledge-holder">
        <p>Enter your pledge</p>
        <div className="pledge-input">
          <input
            type="number"
            min={item.cost}
            className="pledge-number" placeholder={`$${item.cost}`}
            value={currentPledge}
            onChange={(e) => setCurrentPledge(e.target.value)}
          >
          </input>
          <button
            className="btn"
            onClick={() => {
              setCloseModal(true)
            }}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default ModalArticle
