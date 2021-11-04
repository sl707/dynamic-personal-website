import React, { useState } from 'react'
import EditPost from './EditPost'

const Post = ({
  id, title, image, description,
}) => {
  const [editMode, setEditMode] = useState(false)
  if (!editMode) {
    return (
      <div className="card border">
        <img src={image} alt="" />
        <div><h4>{`Post #${id}:${title}`}</h4></div>
        <div><h4>{description}</h4></div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={e => setEditMode(true)}
        >
          Edit Post
        </button>
      </div>
    )
  }
  return (
    <>
      <EditPost
        setEditMode={setEditMode}
        id={id}
        preTitle={title}
        preImage={image}
        preDescription={description}
      />
    </>
  )
}

export default Post
