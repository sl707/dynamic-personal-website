import React from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import Post from './Post'

const PostList = ({ posts }) => posts.map(({
  id, title, image, description,
}) => <Post key={v4()} id={id} title={title} image={image} description={description} />)

const mapStateToProps = ({ postList }) => ({ posts: postList })

export default connect(mapStateToProps)(PostList)
