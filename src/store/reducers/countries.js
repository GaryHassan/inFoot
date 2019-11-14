import { COUNTRIES } from '../constants';

const initialState = {
  countries: [],
  error: false
}

const countries = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        error: false
      }

    case COUNTRIES.GET_COUNTRY_SELECTED:
      return {
        ...state,
        countrySelected: action.payload,
        error: false
      }

    case COUNTRIES.GET_COUNTRY_FAILED:
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

export default countries;