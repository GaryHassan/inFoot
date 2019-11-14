import * as call from '../../services/apiFootball';
import { getMatchesSuccess, getMatchesFailed } from "../actions/matches";

//actionCreator = fonction qui renvoie une action

export default function getAllMatchesByDate() {
  return function (dispatch) {
    call.getMatchesByDate()
      .then(res => {
        dispatch(getMatchesSuccess(res))
      })
      .catch(err => {
        dispatch(getMatchesFailed(err))
      })
  }
}