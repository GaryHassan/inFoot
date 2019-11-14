import { COUNTRIES, SQUAD } from '../constants';

const initialState = {
  squad: [],
  error: false
}

const squad = (state = initialState, action) => {
  switch (action.type) {
    case SQUAD.GET_SQUAD_SUCCESS:
      return {
        ...state,
        squad: action.payload,
        error: false
      }

    case SQUAD.GET_SQUAD_FAILED:
      return {
        ...state,
        error: true
      }
    case COUNTRIES.GET_COUNTRY_SELECTED:
      return {
        ...state,
        squad: initialState.squad,
        error: false
      }
    default:
      return {
        ...state
      }
  }
}

export default squad;