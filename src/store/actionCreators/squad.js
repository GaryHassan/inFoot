import * as call from '../../services/apiFootball';
import { getSquadSuccess, getSquadFailed } from "../actions/squad";

//actionCreator = fonction qui renvoie une action

export default function getSquad(team) {
    return function (dispatch) {
        call.getTeamSquadBySeason(team)
            .then(res => {
                dispatch(getSquadSuccess(res))
            })
            .catch(err => {
                dispatch(getSquadFailed(err))
            })
    }
}