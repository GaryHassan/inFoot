import { CHAMPS } from '../constants';

const initialState = {
  championships: [],
  error: false
}

const championships = (state = initialState, action) => {
  switch (action.type) {
    case CHAMPS.GET_CHAMPS_SUCCESS:
      return {
        ...state,
        championships: action.payload,
        error: false
      }

    case CHAMPS.GET_CHAMPS_FAILED:
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

export default championships;