import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions/index'

const EditPost = ({
  setEditMode, id, preTitle, preImage, preDescription, dispatchEditPost, dispatchDeletePost,
}) => {
  const [titleText, setTitleText] = useState(preTitle)
  const [imageText, setImageText] = useState(preImage)
  const [descriptionText, setDescriptionText] = useState(preDescription)

  const savePress = () => {
    dispatchEditPost({
      id, titleText, imageText, descriptionText,
    })
    setEditMode(false)
  }

  return (
    <div className="card border">
      <div>Title</div>
      <input value={titleText} onChange={e => setTitleText(e.target.value)} />
      <div>Image</div>
      <input value={imageText} onChange={e => setImageText(e.target.value)} />
      <div>Description</div>
      <input value={descriptionText} onChange={e => setDescriptionText(e.target.value)} />
      <button
        onClick={e => savePress()}
        className="btn btn-success"
        type="button"
      >
        Save
      </button>
      <button
        onClick={e => setEditMode(false)}
        className="btn btn-info"
        type="button"
      >
        Cancel
      </button>
      <button
        onClick={e => dispatchDeletePost({ id })}
        className="btn btn-danger"
        type="button"
      >
        DELETE POST
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: input => dispatch(editPost(input)),
  dispatchDeletePost: input => dispatch(deletePost(input)),
})

export default connect(null, mapDispatchToProps)(EditPost)
