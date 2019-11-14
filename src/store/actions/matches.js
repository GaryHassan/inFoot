import { MATCHES } from "../constants";

export const getMatchesSuccess = (data) => ({
  type: MATCHES.GET_MATCHES_SUCCESS,
  payload: data
})

export const getMatchesFailed = () => ({
  type: MATCHES.GET_MATCHES_FAILED
})
