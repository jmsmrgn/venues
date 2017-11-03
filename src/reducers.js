import { combineReducers } from 'redux'
import { ADD_API_DATA } from './actions'

const events = (state = [], action) => {
  if (action.payload) {
    if (action.type === ADD_API_DATA && action.site === 'songkick') {
      return Object.assign({}, state, { [action.payload[0].venue.id]: action.payload })
    }
    if (action.type === ADD_API_DATA && action.site === 'ticketmaster') {
      return Object.assign({}, state, { [action.payload[0]._embedded.venues[0].id]: action.payload })
    }
  }
  return state
}

const rootReducer = combineReducers({events})

export default rootReducer
