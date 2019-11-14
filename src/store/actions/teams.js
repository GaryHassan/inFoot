import { TEAMS } from "../constants";

// getTeam
export const getTeamsSuccess = (teams) => ({
  type: TEAMS.GET_TEAMS_SUCCESS,
  payload: teams
})

export const getTeamsFailed = () => ({
  type: TEAMS.GET_TEAMS_FAILED
})

//getTeam by ID
export const getTeamByIdSuccess = (team) => ({
  type: TEAMS.GET_TEAM_BY_ID_SUCCESS,
  payload: team
})

export const getTeamByIdFailed = () => ({
  type: TEAMS.GET_TEAM_BY_ID_FAILED
})

export const getTeamTransfersSuccess = (team) => ({
  type: TEAMS.GET_TEAM_TRANSFERS_SUCCESS,
  payload: team
})

export const getTeamTransfersFailed = () => ({
  type: TEAMS.GET_TEAM_TRANSFERS_FAILED
})

// set Team Selected
// export const setTeamSelected = (team) => ({
//   type: TEAMS.SET_TEAM_SELECTED,
//   payload: team
// })

// export const setTeamsByLeague = (teams) => ({
//   type: TEAMS.SET_TEAMS_BY_LEAGUE,
//   payload: teams
// })