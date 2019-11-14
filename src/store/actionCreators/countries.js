import * as call from '../../services/apiFootball';
import { getCountriesSuccess, getCountriesFailed } from "../actions/countries";

//actionCreator = fonction qui renvoie une action


export function getAllCountries() {
  return function (dispatch) {
    call.getCountries()
      .then(res => {
        if (res && !res.error) {
          dispatch(getCountriesSuccess(res))
        } else {
          dispatch(getCountriesFailed(res))
          console.log("erreur");
        }
      })
  }
}
