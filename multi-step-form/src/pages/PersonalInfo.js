import React from 'react'
import SubmitBtn from '../components/SubmitBtn'

function PersonalInfo() {
  return (
    <section>
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <div>
          <label for="name">Name</label>
          <input id="" name="name" type="text" placeholder="e.g. Stephen King" />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input id="" name="email" type="email" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input id="" name="phone" type="text" placeholder="e.g. +1 234 567 890" />
        </div>
        <SubmitBtn />
      </form>
    </section>
  )
}

export default PersonalInfo
