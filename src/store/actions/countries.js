import { COUNTRIES, TEST } from "../constants";
// import * as call from '../../services/apiFootball';
// const KEY = process.env.REACT_APP_API_KEY
// const config = { "X-RapidAPI-Key": KEY };

export const getCountriesSuccess = (data) => ({
  type: COUNTRIES.GET_COUNTRY_SUCCESS,
  payload: data
})

export const getCountriesFailed = () => ({
  type: COUNTRIES.GET_COUNTRY_FAILED
})

export const setCountrySelected = (id) => ({
  type: COUNTRIES.GET_COUNTRY_SELECTED,
  payload: id
})

// axios middlewarz
// export const getAllCountries = () => ({
//   type: TEST,
//   payload: {
//     request: {
//       method: 'get',
//       headers: { "X-RapidAPI-Key": KEY },
//       url: "/countries"
//     }
//   }
// })

