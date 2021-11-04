import React, { useState } from 'react'
import { connect } from 'react-redux'
import MainPost from './MainPost'
import NewMainPost from './NewMainPost'

const Intro = ({ image, description }) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="container-fluid bg-primary text-white">
      <div className="row">
        <div className="col">
          <h1> My Intro </h1>
        </div>
        <div className="col">
          {!editMode
          && (
            <button type="button" className="btn btn-warning" onClick={e => setEditMode(true)}>
              Edit
            </button>
          )}
        </div>
      </div>
      {editMode
        ? (
          <NewMainPost
            setEditMode={setEditMode}
            preImage={image}
            preDescription={description}
          />
        ) : <MainPost />}
    </div>
  )
}

const mapStateToProps = ({ mainPost }) => {
  const { image, description } = mainPost
  return ({
    image,
    description,
  })
}

export default connect(mapStateToProps)(Intro)
