import React from 'react'
import { logo, logoWhite } from '../assets/data'

function Fylologo({ color = "normal" }) {
  return (
    <a className="navbar-brand" href="#">
      <img src={color === "normal" ? logo : logoWhite} alt="logo" />
    </a>
  )
}

export default Fylologo
