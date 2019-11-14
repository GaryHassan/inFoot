import * as call from '../../services/apiFootball';
import { getLeaguesSuccess, getLeaguesFailed, getRankingSuccess, getRankingFailed } from "../actions/leagues";


//actionCreator = fonction qui renvoie une action

export function getLeagues(country) {
  return function (dispatch) {
    call.getLeaguesByCountry(country)
      .then(res => {
        dispatch(getLeaguesSuccess(res))
      })
      .catch(err => {
        dispatch(getLeaguesFailed(err))
      })
  }
}

export function getRanking(league) {
  return function (dispatch) {
    call.getRankingByLeague(league)
      .then(res => {
        dispatch(getRankingSuccess(res))
      })
      .catch(err => {
        dispatch(getRankingFailed(err))
      })
  }
}