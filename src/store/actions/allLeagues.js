import { ALL_LEAGUES } from "../constants";

export const getAllLeaguesSuccess = (data) => ({
    type: ALL_LEAGUES.GET_ALL_LEAGUES_SUCCESS,
    payload: data
})

export const getAllLeaguesFailed = () => ({
    type: ALL_LEAGUES.GET_ALL_LEAGUES_FAILED
})
