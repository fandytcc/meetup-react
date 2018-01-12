import { UPDATE_TOPICS } from '../actions/topics'

export default function(state = [], action = {}) {
  switch(action.type) {
    case UPDATE_TOPICS :
      return {...action.payload}

  default:
    return state
  }
}
