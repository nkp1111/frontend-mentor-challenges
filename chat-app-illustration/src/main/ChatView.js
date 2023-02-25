import React from 'react'

function ChatView({ chatData }) {
  return (
    <div className="card-body">
      {chatData.map(item => {
        return (
          <div className="content">
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
    <div className="img-holder">
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
    <div className="business">
      <p>{item.message} <span>${item.price}</span></p>
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
