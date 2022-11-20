import React from 'react'
import useGlobalContext from '../context'

function DeleteModal() {

  const { commentData, replyDataMapping, setDeleteModal, modifyId, setModifyId, deleteComment } = useGlobalContext()
  return (
    <article id="delete-modal">

      <div className='p-4'>
        <h2>Delete comment</h2>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

        <div className='d-flex justify-content-between p-3'>
          <button onClick={() => {
            setModifyId(0)
            setDeleteModal(false)
          }}>
            NO, CANCEL
          </button>

          <button onClick={() => {

            replyDataMapping(commentData, modifyId, "delete")
            deleteComment(modifyId)
            setDeleteModal(false)
          }}>
            YES, DELETE
          </button>
        </div>

      </div>

    </article>
  )
}

export default DeleteModal
