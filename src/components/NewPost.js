import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/index'

const NewPost = ({
  addMode, setAddMode, dispatchAddPost,
}) => {
  const [titleText, setTitleText] = useState('')
  const [imageText, setImageText] = useState('')
  const [descriptionText, setDescriptionText] = useState('')

  const savePress = () => {
    dispatchAddPost({ titleText, imageText, descriptionText })
    setAddMode(false)
  }

  if (addMode) {
    return (
      <>
        <div className="row"><h5>New Post</h5></div>
        <div className="row">Title</div>
        <div className="row">
          <input value={titleText} onChange={e => setTitleText(e.target.value)} />
        </div>
        <div className="row">Image</div>
        <div className="row">
          <input value={imageText} onChange={e => setImageText(e.target.value)} />
        </div>
        <div className="row">Description</div>
        <div className="row">
          <input value={descriptionText} onChange={e => setDescriptionText(e.target.value)} />
        </div>
        <div className="row">
          <button
            onClick={e => savePress()}
            className="btn btn-success"
            type="button"
          >
            Save
          </button>
          <button
            onClick={e => setAddMode(false)}
            className="btn btn-info"
            type="button"
          >
            Cancel
          </button>
        </div>
      </>
    )
  } return null
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: input => dispatch(addPost(input)),
})

export default connect(null, mapDispatchToProps)(NewPost)
