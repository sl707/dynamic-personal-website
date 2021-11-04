import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const default_state = []

const postListReducer = (state = default_state, action) => {
  const {
    id, type, title, image, description,
  } = action
  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, image, description,
      }]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            id, title, image, description,
          }
        } return post
      })
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default postListReducer
