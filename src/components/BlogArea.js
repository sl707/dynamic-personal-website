import React, { useState } from 'react'
import NewPost from './NewPost'
import PostList from './PostList'

const BlogArea = () => {
  const [addMode, setAddMode] = useState(false)

  return (
    <div className="container-fluid bg-light text-dark">
      <div className="row">
        <div className="col">
          <h1>My Blog Posts </h1>
        </div>
        <div className="col">
          {!addMode && (
          <button type="button" className="btn btn-primary" onClick={e => setAddMode(true)}>
            Add Post
          </button>
          )}
        </div>
      </div>
      <NewPost addMode={addMode} setAddMode={setAddMode} />
      <PostList />
    </div>
  )
}

export default BlogArea
