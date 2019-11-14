import * as call from '../../services/apiFootball';
import { getChampionshipsSuccess, getChampionshipsFailed } from "../actions/championships";

//actionCreator = fonction qui renvoie une action

export default function getChampionships() {

    return function (dispatch) {
        call.getLeagues()
            .then(res => {
                dispatch(getChampionshipsSuccess(res))
            })
            .catch(err => {
                dispatch(getChampionshipsFailed(err))
            })
    }
}