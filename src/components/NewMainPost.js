import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeMainPost } from '../actions/index'

const NewMainPost = ({
  setEditMode, dispatchChangeMainPost, preImage = '', preDescription = '',
}) => {
  const [imageText, setImageText] = useState(preImage)
  const [descriptionText, setDescriptionText] = useState(preDescription)

  const savePress = () => {
    dispatchChangeMainPost({ imageText, descriptionText })
    setEditMode(false)
  }

  return (
    <>
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
          onClick={e => setEditMode(false)}
          className="btn btn-info"
          type="button"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchChangeMainPost: input => dispatch(changeMainPost(input)),
})

export default connect(null, mapDispatchToProps)(NewMainPost)
