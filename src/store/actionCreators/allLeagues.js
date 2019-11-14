import * as call from '../../services/apiFootball';
import { getAllLeaguesSuccess, getAllLeaguesFailed } from "../actions/allLeagues";

//actionCreator = fonction qui renvoie une action

export default function getAllLeagues() {
    return function (dispatch) {
        call.getLeagues()
            .then(res => {
                dispatch(getAllLeaguesSuccess(res))
            })
            .catch(err => {
                dispatch(getAllLeaguesFailed(err))
            })
    }
}