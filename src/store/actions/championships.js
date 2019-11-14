import { CHAMPS } from "../constants";

export const getChampionshipsSuccess = (data) => ({
    type: CHAMPS.GET_CHAMPS_SUCCESS,
    payload: data
})

export const getChampionshipsFailed = () => ({
    type: CHAMPS.GET_CHAMPS_FAILED
})
