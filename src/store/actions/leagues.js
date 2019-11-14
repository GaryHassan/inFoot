import { LEAGUES } from "../constants";

export const getLeaguesSuccess = (data) => ({
  type: LEAGUES.GET_LEAGUES_SUCCESS,
  payload: data
})

export const getLeaguesFailed = () => ({
  type: LEAGUES.GET_LEAGUES_FAILED
})

export const setLeagueSelected = (league) => ({
  type: LEAGUES.SET_SELECTED_LEAGUE,
  payload: league
})

export const getRankingSuccess = (ranking) => ({
  type: LEAGUES.GET_RANKING_SUCCESS,
  payload: ranking
})

export const getRankingFailed = () => ({
  type: LEAGUES.GET_RANKING_FAILED
})


