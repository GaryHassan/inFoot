import * as call from '../../services/apiFootball';
import { getTeamsSuccess, getTeamsFailed, getTeamByIdSuccess, getTeamByIdFailed, getTeamTransfersSuccess, getTeamTransfersFailed } from "../actions/teams";

export function getTeams(id) {
  return function (dispatch) {
    call.getTeamsByLeague(id)
      .then(res => {
        dispatch(getTeamsSuccess(res))
      })
      .catch(err => {
        dispatch(getTeamsFailed(err))
      })
  }
}

export function getTeamById(id) {
  return function (dispatch) {
    call.getTeamByID(id)
      .then(res => {
        dispatch(getTeamByIdSuccess(res))
      })
      .catch(err => {
        dispatch(getTeamByIdFailed(err))
      })
  }
}

export function getTransfers(id) {
  return function (dispatch) {
    call.getTeamTransfers(id)
      .then(res => {
        dispatch(getTeamTransfersSuccess(res))
      })
      .catch(err => {
        dispatch(getTeamTransfersFailed(err))
      })
  }
}