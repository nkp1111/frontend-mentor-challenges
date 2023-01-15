import React from 'react'

function ModalArticle({ item, pledge, selectPledge }) {
  return (
    <article key={item.id}
      className={`article ${item.item_left === 0 ? "stock-out" : ""} ${pledge === item.id ? "pledge-selected" : ""}`}>
      <div className="row">
        <div className='article-info-head col-8 order-2'>
          <h3>{item.name}</h3>
          <span className='article-cost'>{item.cost} or more</span>
        </div>
        <input
          type="radio"
          className="col-3 order-1 radio-btn"
          checked={false}
          onChange={(e) => {
            selectPledge(item.id)
          }}></input>
      </div>
      <p>
        {item.description}
      </p>
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
        <div className="pledge-holder">
          <hr></hr>
          <p>Enter your pledge</p>
          <div className="pledge-input">
            <input
              type="number"
              min={item.cost}
              className="pledge-number" placeholder={`$${item.cost}`}
            >
            </input>
            <button className="btn">Continue</button>
          </div>
        </div>
      }
    </article>
  )
}

export default ModalArticle
