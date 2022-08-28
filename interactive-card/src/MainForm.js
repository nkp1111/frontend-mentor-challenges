import React from 'react'
import SubmitForm from './SubmitForm'
import ContinueForm from './ContinueForm'
import useGlobalContext from './context'

const MainForm = () => {

  const { submit, handleSubmit, error } = useGlobalContext()
  console.log(submit, error)
  return (
    <div className="form-holder">
      <form id="main-form"
        className={submit ? 'after-submit' : ''
          || error ? 'error-stat' : ''}
        onSubmit={(e) => handleSubmit(e)}>
        {submit ? <ContinueForm /> : <SubmitForm />}
        {console.log(submit, error)}
      </form>
    </div>
  )
}

export default MainForm
