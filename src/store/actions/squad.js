import { SQUAD } from "../constants";


export const getSquadSuccess = (team) => ({
  type: SQUAD.GET_SQUAD_SUCCESS,
  payload: team
})

export const getSquadFailed = () => ({
  type: SQUAD.GET_SQUAD_FAILED
})