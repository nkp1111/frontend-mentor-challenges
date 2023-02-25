import React from 'react'

function ChatView({ chatData }) {
  return (
    <div className="card-body d-flex flex-column">
      {chatData.map(item => {
        return (
          <div className={`content msg-${item.action} type-${item.type}`} key={item.id}>
            {item.type === "img"
              // image message 
              ? <ImageMessage item={item} />
              : item.type === "business"
                // Business message
                ? <BusinessMessage item={item} />
                // normal message
                : <NormalMessage item={item} />}
          </div>
        )
      })}
    </div>
  )
}

const ImageMessage = ({ item }) => {
  return (
    <div className="img-holder d-flex">
      {item.message.map((item, ind) => {
        return (
          <img src={item} alt="." key={ind}></img>
        )
      })}
    </div>
  )
}

const BusinessMessage = ({ item }) => {
  return (
    <div className="business d-flex align-items-center">
      <div className="radio-holder">
        <input
          type="radio"
          value={item.price}
          name="price"
          id={`plan-${item.id}`}></input>
      </div>
      <label htmlFor={`plan-${item.id}`}>{item.message}</label>
      <span className='price ms-auto'>${item.price}</span>
    </div>
  )
}

const NormalMessage = ({ item }) => {
  return (
    <div className="talk">
      {item.message}
    </div>
  )
}

export default ChatView
