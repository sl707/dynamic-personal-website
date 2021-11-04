import { combineReducers } from 'redux'
import mainPost from './mainPost'
import postList from './postList'

export default combineReducers({
  mainPost,
  postList,
})
