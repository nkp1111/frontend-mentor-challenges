import React from 'react'
import SubmitBtn from '../components/SubmitBtn'

function PersonalInfo() {
  return (
    <section id="personal-info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="" name="name" type="text" placeholder="e.g. Stephen King" autoFocus required />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input id="" name="email" type="email" placeholder="e.g. stephenking@lorem.com" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input id="" name="phone" type="text" placeholder="e.g. +1 234 567 890" required />
        </div>
        <SubmitBtn />
      </form>
    </section>
  )
}

export default PersonalInfo
