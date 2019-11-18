import {
  createStore
} from 'redux'

const counter = (state = {
  stuBasic: {}
}, action) => {
  switch (action.type) {
    case 'SETSEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    case 'SETGALLERY':
      return {
        ...state,
        gallery: action.gallery
      }
    default:
      return state
  }
}

const store = createStore(counter)

export default store