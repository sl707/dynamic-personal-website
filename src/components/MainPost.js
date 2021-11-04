import React from 'react'
import { connect } from 'react-redux'

const MainPost = ({ image, description }) => (
  <div className="row">
    <div className="col">
      <img src={image} alt="" />
    </div>
    <div className="col"><h4>{description}</h4></div>
  </div>
)

const mapStateToProps = ({ mainPost }) => {
  const { image, description } = mainPost
  return ({
    image,
    description,
  })
}

export default connect(mapStateToProps)(MainPost)
