let newId = 1
export const CHANGE_MAIN_POST = 'CHANGE_MAIN_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const changeMainPost = ({ imageText, descriptionText }) => ({
  type: CHANGE_MAIN_POST,
  image: imageText,
  description: descriptionText,
})

export const addPost = ({ titleText, imageText, descriptionText }) => ({
  id: newId++,
  type: ADD_POST,
  title: titleText,
  image: imageText,
  description: descriptionText,
})

export const editPost = ({
  id, titleText, imageText, descriptionText,
}) => ({
  id,
  type: EDIT_POST,
  title: titleText,
  image: imageText,
  description: descriptionText,
})

export const deletePost = ({ id }) => ({
  id,
  type: DELETE_POST,
})
