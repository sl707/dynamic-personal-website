import { CHANGE_MAIN_POST } from '../actions'

const default_state = {
  image: '',
  description: '',
}

const MainPostReducer = (state = default_state, action) => {
  const { type, image, description } = action
  switch (type) {
    case CHANGE_MAIN_POST:
      return { image, description }
    default:
      return state
  }
}

export default MainPostReducer
