import { MATCHES } from '../constants';

const initialState = {
  matches: [],
  error: false
}

const matches = (state = initialState, action) => {
  switch (action.type) {
    case MATCHES.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload,
        error: false
      }

    case MATCHES.GET_MATCHES_FAILED:
      return {
        ...state,
        error: true
      }

    default:
      return {
        ...state
      }
  }
}

export default matches;